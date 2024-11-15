import { Module } from "@nestjs/common";
import { ConfigService, ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                uri: configService.get('MONGO_DB_URL'),
            }),
            inject: [ConfigService],
        })
    ]
})
export class DatabaseModule { }
