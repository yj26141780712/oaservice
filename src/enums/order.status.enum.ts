export enum OrderStatus {
    /**
     * 订单关闭
     */
    Close = '-2',
    /**
     * 订单取消
     */
    Cancle = '-1',
    /**
     * 订单待付款
     */
    NoPay = '0',
    /**
     * 订单已付款
     */
    Pay = '1',
    /**
     * 订单已完成
     */
    Finish = '2'
}

export enum OrderStatusCode {
    /**
     * 订单关闭
     */
    Close = 'invalid',
    /**
     * 订单取消
     */
    Cancle = 'cancle',
    /**
     * 订单未付款 
     */
    NoPay = 'nopay',
    /**
     * 订单已付款 未发货
     */
    NoSend = 'nosend',
    /**
     * 订单已付款 待收货
     */
    NoGet = 'noget',
    /**
     * 订单完成
     */
    Finish = 'finish'
}