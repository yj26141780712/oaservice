import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor() {

  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.user) {
      throw new HttpException('请传入token！', 502);
    }
    return true;
  }


  private verifyToken(token: string, secret: string) {
    // return new Promise((resolve) => {
    //   jwt.verify(token, secret, (error, payload) => {
    //     if (error) {
    //       console.log('-----------error start--------------');
    //       console.log(error);
    //       console.log('-----------error end--------------');
    //       throw new HttpException('token不合法', HttpStatus.OK);
    //     } else {
    //       resolve(payload);
    //     }
    //   });
    // });
  }
}
