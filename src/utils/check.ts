// import { DispatchExpress } from "src/entitys/models/DispatchExpress";
import { OrderStatus, OrderStatusCode } from "src/enums/order.status.enum";

export function isNotNil<T>(value: T): value is NonNullable<T> {
    return typeof value !== 'undefined' && value !== null;
}

export function isNil(value: unknown): value is null | undefined {
    return typeof value === 'undefined' || value === null;
}


export function checkOrderStatus(status: string, noCheck: string[]) {
    if (noCheck.indexOf(status) > -1) {
        return;
    }
    if (status === OrderStatus.Cancle) {
        return '订单已取消！';
    }
    if (status === OrderStatus.Close) {
        return '订单已关闭！';
    }
    if (status === OrderStatus.NoPay) {
        return '订单未付款！';
    }
    if (status === OrderStatus.Pay) {
        return '订单已付款！';
    }
    if (status === OrderStatus.Finish) {
        return '订单已完成！';
    }
    return '订单状态异常,请联系管理员！';
}


export function checkOrderStatusCode(statusCode: string, noCheck: string[]) {
    if (noCheck.indexOf(statusCode) > -1) {
        return;
    }
    if (statusCode === OrderStatusCode.Cancle) {
        return '订单已取消！';
    }
    if (statusCode === OrderStatusCode.Close) {
        return '订单已关闭！';
    }
    if (statusCode === OrderStatusCode.NoPay) {
        return '订单未付款！';
    }
    if (statusCode === OrderStatusCode.NoSend) {
        return '订单未发货！';
    }
    if (statusCode === OrderStatusCode.NoGet) {
        return '订单已发货！';
    }
    if (statusCode === OrderStatusCode.Finish) {
        return '订单已完成！';
    }
    return '订单状态异常,请联系管理员！';
}

// /**
//  * 检查这个地区是否在配送范围
//  */
// export function checkExpressArea(express: DispatchExpress, {
//     areaId, cityId, provinceId }: { areaId: number, cityId: number, provinceId: number }): boolean {
//     const provinceIds = express.provinceIds ? express.provinceIds.split(',').map(x => Number(x)) : [];
//     if (provinceIds.indexOf(provinceId) > -1) {
//         return true;
//     }
//     const cityIds = express.cityIds ? express.cityIds.split(',').map(x => Number(x)) : [];
//     if (cityIds.indexOf(cityId) > -1) {
//         return true;
//     }
//     const areaIds = express.areaIds ? express.areaIds.split(',').map(x => Number(x)) : [];
//     if (areaIds.indexOf(areaId) > -1) {
//         return true;
//     }
// }