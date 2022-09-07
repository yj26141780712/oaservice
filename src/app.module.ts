import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import databaseConfig, { DatabaseConfig } from './config/database.config';
import { ControllersModule } from './controllers/controllers.module';
import envSwaggerConfig from './config/swagger.config';
import uploadConfig, { UploadConfig } from './config/upload.config';
import redisConfig from './config/redis.config';
import serviceConfig, { ServiceConfig } from './config/service.config';
import timConfig, { TimConfig } from './config/tim.config';
import { ServeStaticModule, ServeStaticModuleOptions } from '@nestjs/serve-static';



const envPath = `config/env/${process.env.NODE_ENV || 'dev'}.env`;
const useFactory = async (configService: ConfigService) => {
  const config = configService.get<DatabaseConfig>('DatabaseConfig');
  const option: ConnectionOptions = {
    type: <any>config.type,
    host: config.host,
    port: config.port,
    username: config.username,
    password: 'EsTo@#2021',
    database: config.database,
    options: {
      encrypt: false
    },
    entities: [__dirname + '/entitys/models/*{.ts,.js}'],
  };
  console.log(option)
  return option;
}

@Module({
  imports: [
    ConfigModule.forRoot({
      encoding: 'utf-8',
      envFilePath: envPath, // [...getDirAllFileNameArr()],
      expandVariables: true,
      ignoreEnvVars: true,
      load: [envSwaggerConfig, databaseConfig, redisConfig, uploadConfig, serviceConfig, timConfig],
      validationOptions: {
        allowUnknown: false, // 控制是否允许环境变量中未知的键。默认为true。
        abortEarly: true, // 如果为true，在遇到第一个错误时就停止验证；如果为false，返回所有错误。默认为false。
      },
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: useFactory,
      inject: [ConfigService],
    }),
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const config = configService.get<UploadConfig>('UploadConfig');
        const serviceConfig = configService.get<ServiceConfig>('ServiceConfig');
        const options: ServeStaticModuleOptions[] = [{
          rootPath: config.path,
          serveRoot: serviceConfig.static,
          exclude: [serviceConfig.prefix + '/api*']
        }];
        return options;
      },
      inject: [ConfigService],
    }),
    ControllersModule
  ],
})
export class AppModule { }
