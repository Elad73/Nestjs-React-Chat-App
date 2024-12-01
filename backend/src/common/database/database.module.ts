import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ModelDefinition, MongooseModule } from "@nestjs/mongoose";
import { DbMigrationService } from "./db-migration.service";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                uri: configService.get('MONGO_DB_URI'),
            }),
            inject: [ConfigService],
        })
    ],
    // importing the db migration service to handle the migrations
    providers: [DbMigrationService],
})
export class DatabaseModule { 
    static forFeature(models: ModelDefinition[]) {
        return MongooseModule.forFeature(models);
    }
}
