import { addDays } from "date-fns";
import { RentUnit } from "src/enums/rentUnit.enum";
import { isNotNil } from "./check";

export function camelToUnderline(camelStr: string) {
    return camelStr.replace(/[A-Z]/g, function (s: string) {
        return '_' + s.toLowerCase();
    }).trim();
}


export function returnPaginationList(items: any[], total: number) {
    const result: any = {
        data: items
    };
    if (isNotNil(total)) {
        result.total = total;
    }
    return result;
}

export function countRentExpriedDate(type: string, num: number) {
    if (type === RentUnit.day) {
        return addDays(new Date(), num);
    }
    if (type === RentUnit.month) {
        return addDays(new Date(), num * 30);
    }
    if (type === RentUnit.year) {
        return addDays(new Date(), num * 365);
    }
}