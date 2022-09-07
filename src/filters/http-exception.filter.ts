import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { format } from 'date-fns';
import { Codes } from 'src/enums/codes.emum';
import { getErrorMessage } from 'src/utils/error';



@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {

  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    let message = getErrorMessage(exception);
    let code = [501, 502, 503].includes(status) ? status : Codes.error;
    const errorResponse = {
      message,
      code, // 自定义code
      path: request.url, // 错误的url地址
      method: request.method, // 请求方式
      time: format(Date.now(), 'yyyy-MM-dd HH:mm:ss'), // 错误的时间
    };
    // 打印日志
    Logger.error(
      `【${errorResponse.time}】${request.method} ${request.url}`,
      JSON.stringify(errorResponse),
      'HttpExceptionFilter',
    );
    // 设置返回的状态码、请求头、发送错误信息
    response.status(HttpStatus.OK);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }

}

