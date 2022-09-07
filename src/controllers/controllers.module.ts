import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ServicesModule } from 'src/services/services.module';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { MulterModule } from '@nestjs/platform-express';
import { UploadConfig } from 'src/config/upload.config';
import { diskStorage } from 'multer';
import { join } from 'path';
import { format } from 'date-fns';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';
import { ServiceConfig } from 'src/config/service.config';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { RouteInfo } from '@nestjs/common/interfaces';
import { AccountController } from './account/account.controller';


@Module({
    imports: [
        ConfigModule,
        MulterModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => {
                const config = configService.get<UploadConfig>('UploadConfig');
                return {
                    storage: diskStorage({
                        destination: join(config.path, `${format(new Date(), 'yyyy-MM-dd')}`),
                        filename: (req, file, cb) => {
                            const filename = `${uuid()}.${file.mimetype.split('/')[1]}`;
                            return cb(null, filename);
                        }
                    })
                };
            },
            inject: [ConfigService],
        }),
        ServicesModule,
    ],
    controllers: [
    AccountController],
})
export class ControllersModule implements NestModule {
    paths = [
        '/account/sendVcode',
        '/account/registerByPhone',
        '/account/loginByPhone',
        '/account/loginByPassword',
        '/account/refreshToken',
        '/attachment/suffixImage'
    ];
    constructor(private configService: ConfigService) {

    }
    configure(consumer: MiddlewareConsumer) {
        const config = this.configService.get<ServiceConfig>('ServiceConfig');
        const routeInfos: RouteInfo[] = this.paths.map(path => {
            return { path: config.prefix + path, method: RequestMethod.GET }
        });
        consumer.apply(AuthMiddleware, LoggerMiddleware)
            .exclude(...routeInfos)
            .forRoutes('*');
    }
}
