import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { config, database, up } from 'migrate-mongo';
import { Logger } from 'nestjs-pino';


@Injectable()
// implementing OnModuleInit to run the migration on module init
export class DbMigrationService implements OnModuleInit {
    // migration config from the migrate-mongo library
    private readonly dbMigrationConfig: Partial<config.Config> = {
        mongodb: {
            databaseName: this.configService.getOrThrow('MONGO_DB_NAME'),
            url: this.configService.getOrThrow('MONGO_DB_URI'),
        },
        // directory where the migrations are stored (relative to the current file)
        migrationsDir: `${__dirname}/../../migrations`,
        // collection name where the changelog is stored 
        changelogCollectionName: 'changelog',
        // file name of the migration
        migrationFileExtension: '.js',
    }
    constructor(private readonly configService: ConfigService, private readonly logger: Logger) { }

    // running the migration on module init, part of the OnModuleInit interface
    async onModuleInit() {
        // setting the migration config from the config service
        config.set(this.dbMigrationConfig);
        // connecting to the database
        const { db, client } = await database.connect();
        this.logger.log('Connected to the database');
        // applying the migrations
        await up(db, client);
        this.logger.log('Migrations applied');
    }
}