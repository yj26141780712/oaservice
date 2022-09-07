import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { CommonJwtService } from 'src/services/common-jwt.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  constructor(private readonly commmonService: CommonJwtService) {

  }

  async use(req: any, res: any, next: () => void) {
    const token =
      req.headers.token || req.query.token || req.body.token;
    if (token) {
      try {
        const result = await this.commmonService.checkToken(token, 1);
        req.user = result;
      } catch (err) {

        const message = err.message ? err.message : JSON.stringify(err.message);
        throw new HttpException('token验证失败,' + message, 502);
      }
    }
    next();
  }
}
