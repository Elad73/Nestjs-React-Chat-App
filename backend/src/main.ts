import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // creating app with bufferLogs to avoid losing logs
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  // adding validation to the app
  app.useGlobalPipes(new ValidationPipe());
  // adding pino logger to app
  app.useLogger(app.get(Logger));
  const configService = app.get(ConfigService);
  // getting port from config service and starting the app
  await app.listen(configService.getOrThrow('PORT'));
}
bootstrap();
