import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvSwaggerOptions } from './config/swagger.config';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { IoAdapter } from '@nestjs/platform-socket.io';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  //处理跨域
  app.enableCors();
  app.setGlobalPrefix(configService.get('PREFIX'));

  // websocket 
  app.useWebSocketAdapter(new IoAdapter({}));

  initSwagger(app, configService);
  // 拦截返回响应
  app.useGlobalInterceptors(new TransformInterceptor());
  // 拦截异常
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(configService.get('SERVER_LISTENER_PORT'));
}

bootstrap();

function initSwagger(app: INestApplication, configService: ConfigService) {
  const swaggerOptions = configService.get<EnvSwaggerOptions>(
    'EnvSwaggerOptions',
  );
  const swaggerConfig = new DocumentBuilder()
    .setTitle(swaggerOptions.title)
    .setDescription(swaggerOptions.desc)
    .setVersion(swaggerOptions.version)
    .addBearerAuth({ type: 'http', name: 'token' })
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(swaggerOptions.setupUrl, app, document, {
    customSiteTitle: swaggerOptions.title,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    },
  });
}
