import { Injectable, NestMiddleware } from '@nestjs/common';
import { LoggerService } from 'src/services/logger.service';
import { remoteAddressToIp } from 'src/utils/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  constructor(private loggerService: LoggerService) {
  }

  use(req: any, res: any, next: () => void) {
    if (req.user && req.user.id) {
      this.loggerService.logAction({
        accountId: req.user.id,
        ip: remoteAddressToIp(req.connection.remoteAddress),
        url: req.originalUrl,
        logType: 'api'
      });
    }
    next();
  }
}
