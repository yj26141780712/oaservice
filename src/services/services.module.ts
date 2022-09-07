import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EntitysModule } from 'src/entitys/entitys.module';
import { JwtModule } from '@nestjs/jwt';
import { CommonJwtService } from './common-jwt.service';
import { CommonService } from './common.service';
import { HttpModule } from '@nestjs/axios';
import { LoggerService } from './logger.service';
import { AccountService } from './account/account.service';

const list = [
    CommonJwtService,
    CommonService,
    LoggerService,
    AccountService
];

@Module({
    imports: [
        ConfigModule,
        EntitysModule,
        JwtModule.register({}),
        // CacheModule.registerAsync({
        //     imports: [ConfigModule],
        //     useFactory: async (configService: ConfigService) => {
        //         const config = configService.get<RedisConfig>('RedisConfig');
        //         return {
        //             store: redisStore,
        //             host: config.host,
        //             port: config.port
        //         };
        //     },
        //     inject: [ConfigService],
        // }),
        HttpModule.registerAsync({
            useFactory: () => ({
                timeout: 5000,
                maxRedirects: 5,
            }),
        }),
    ],
    providers: [...list, AccountService],
    exports: [...list]
})
export class ServicesModule { }
