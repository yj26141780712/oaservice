import { ObjectType } from "src/types/obj.type";
import { SelectQueryBuilder } from "typeorm";
import { camelToUnderline } from "./convert";

export function sqlAddFilter<T>(sql: SelectQueryBuilder<T>, { filterBy, filters }: ObjectType) {
    if (filterBy && filters) {
        const filterByList = (filterBy as string).split(',');
        const filtersList = (filters as string).split(',');
        filterByList.forEach((field: string, index: number) => {

        });
    }
}

export function sqlAddOrderBy<T>(sql: SelectQueryBuilder<T>, { sortBy, orderBy }: ObjectType, alias?: string) {
    if (sortBy && orderBy) {
        const sortList = (sortBy as string).split(',');
        const orderByList = (orderBy as string).split(',');
        sortList.forEach((sort: string, index: number) => {
            const by = orderByList[index].toUpperCase();
            if (sort && (by === 'ASC' || by === 'DESC')) {
                sql.addOrderBy(alias ? `${alias}.${camelToUnderline(sort)}` : camelToUnderline(sort), by);
            }
        })
    }
    return sql;
}

export function sqlAddPagination<T>(sql: SelectQueryBuilder<T>, { pageSize, pageNum = 1 }: ObjectType) {
    let promise: Promise<[T[], number]>;
    if (pageSize && pageNum) {
        promise = sql.skip(pageSize ? pageSize * (pageNum - 1) : 0)
            .take(pageSize)
            .getManyAndCount()
    } else {
        promise = sql.getMany().then(res => {
            return Promise.resolve([res, 0]);
        });
    }
    return promise;
}

export function sqlAddLimit<T>(sql: SelectQueryBuilder<T>, { pageSize, pageNum = 1 }: ObjectType) {
    let promise: Promise<[T[], number]>;
    if (pageSize) {
        promise = sql.offset(pageSize * (pageNum - 1))
            .limit(pageSize)
            .getManyAndCount()
    } else {
        promise = sql.getMany().then(res => {
            return Promise.resolve([res, 0]);
        });
    }
    return promise;
}



export function sqlAddPaginationByRaw<T>(sql: SelectQueryBuilder<T>, { pageSize, pageNum = 1 }: ObjectType) {
    let promise: Promise<[any[], number]> | Promise<any[]>;
    if (pageSize && pageNum) {
        let total = 0;
        promise = sql.getCount().then(value => {
            total = value;
            return sql.skip(pageSize ? pageSize * (pageNum - 1) : 0)
                .take(pageSize)
                .getRawMany();
        }).then(res => {
            return Promise.resolve([res, total]);
        })
    } else {
        promise = sql.getRawMany().then(res => {
            return Promise.resolve([res, null]);
        });
    }
    return promise;
}