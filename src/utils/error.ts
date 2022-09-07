import { HttpException } from "@nestjs/common";
import { WsException } from "@nestjs/websockets";
import { isArray, isString } from "class-validator";
import { TypeORMError } from "typeorm";

export function getErrorMessage<T>(exception: T) {
    let message = '';
    if (exception instanceof HttpException) {
        const exResponse: any = exception.getResponse();
        if (isString(exResponse)) {
            message = exResponse;
        } else {
            if (isArray(exResponse.message)) {
                message = exResponse.message.join(';')
            }
            if (isString(exResponse.message)) {
                message = exResponse.message;
            }
        }
    } else if (exception instanceof WsException) {
        message = exception.message;
    }
    else if (exception instanceof TypeORMError) {
        message = `数据库操作异常：${exception.message}`;
    } else {
        if (exception['message'] && isString(exception['message'])) {
            message = exception['message'];
        }
    }
    return message || '服务器错误';
}