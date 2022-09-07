import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';


@Injectable()
export class WsAuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ws = context.switchToWs();
        const client = ws.getClient();
        return !!client['account'];
    }
}
