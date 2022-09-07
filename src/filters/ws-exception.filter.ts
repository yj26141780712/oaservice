import { ArgumentsHost, Catch } from "@nestjs/common";
import { BaseWsExceptionFilter } from "@nestjs/websockets";
import { Socket } from "net";
import { Codes } from "src/enums/codes.emum";
import { getErrorMessage } from "src/utils/error";


@Catch()
export class SocketExceptionFilter extends BaseWsExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void {
        const ws = host.switchToWs();
        let message = getErrorMessage(exception);
        const client: Socket = ws.getClient();
        if (client['userId']) {
            client.emit('error', {
                code: Codes.error,
                message
            });
        }
    }


}
