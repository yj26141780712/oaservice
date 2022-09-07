import { format } from "date-fns";



export function getOrderSn(prefix: string, dateStr: string, index: number) {
    console.log(index);
    const str = index.toString().padStart(8, '0');
    return `${prefix}${dateStr}${str}`;
}

export function getOrderPrefixAndDateStr(): { prefix: string, dateStr: string } {
    return { prefix: '', dateStr: format(new Date(), 'yyyyMMdd') };
}