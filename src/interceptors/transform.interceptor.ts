import { CallHandler, ExecutionContext, Injectable, NestInterceptor, StreamableFile } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Codes } from 'src/enums/codes.emum';

@Injectable()
export class TransformInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map(obj => {
      const isEventStream = context.getArgs()[0].headers.accept == 'text/event-stream';
      if (isEventStream) {

      } else if (obj instanceof StreamableFile) {
        return obj;
      } else {
        return {
          code: Codes.ok,
          message: obj.message || 'ok',
          ...obj
        };
      }
    }));
  }
}
