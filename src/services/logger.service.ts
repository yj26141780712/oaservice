import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Log } from 'src/entitys/models/Log';
import { ObjectType } from 'src/types/obj.type';
import { sqlAddPagination } from 'src/utils/sql';
import { Repository } from 'typeorm';
// import { configure, getLogger } from "log4js";

// configure("./filename");
// const logger = getLogger();
// logger.level = "debug";
// logger.debug("Some debug messages");

// configure({
//     appenders: { cheese: { type: "file", filename: "cheese.log" } },
//     categories: { default: { appenders: ["cheese"], level: "error" } }
// });

interface LogDto {
    logType: string;
    accountId: number;
    ip: string;
    url: string;
}

@Injectable()
export class LoggerService {

    constructor() {

    }

    logAction(obj: LogDto) {
        // this.logRepository.createQueryBuilder()
        //     .insert()
        //     .into(Log)
        //     .values({ ...obj })
        //     .execute();
    }

    async getLogList(query: ObjectType, userId: number) {
        // const sql = this.logRepository.createQueryBuilder()
        //     .where('account_id = :accountId', { accountId: userId });
        // const [items, total] = await sqlAddPagination(sql, query);
        // const result: any = {
        //     data: items,
        // };
        // if (total) {
        //     result.total = total;
        // }
        // return result;
    }
}
