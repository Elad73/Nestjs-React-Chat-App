import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from './common/database/database.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { LoggerModule } from 'nestjs-pino';

// main app module
@Module({
  imports: [
    // importing the config module to load the environment variables
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGO_DB_URI: Joi.string().required(),
      }),
    }),
    // importing the graphql module to enable graphql support
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    // importing the database module to enable database support
    DatabaseModule,
    // importing the users module to enable users support
    UsersModule,
    // adding pino logger to app and pretty printing the logs
    LoggerModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const isProduction = configService.get('NODE_ENV') === 'production';
        return {
          pinoHttp: {
            transport: isProduction ? undefined : {
              target: 'pino-pretty',
                options: {
                  singleLine: true,
                },
            },
            level: isProduction ? 'info' : 'debug',
          },
        };
      },
      // injecting the config service to the logger module
      inject: [ConfigService],
    }),
  ],
  // importing the app controller to handle the root route
  controllers: [AppController],
  // importing the app service to handle the root route
  providers: [AppService],
})
export class AppModule {}
