export enum ProductStatus {
    /**
     * 待发货
     */
    noSend = '0',
    /**
     * 已发货
     */
    sending = '1',
    /**
     * 已后货
     */
    get = '2',
    /**
     * 未归还
     */
    noReturn = '3',
    /**
     * 已归还
     */
    return = '4'
}