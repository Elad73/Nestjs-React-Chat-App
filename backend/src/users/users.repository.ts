// Import required dependencies
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { AbstractRepository } from "src/common/database/abstract.repository";
import { UserDocument } from "./entities/user.schema";
import { Model } from "mongoose";

// Mark class as injectable so NestJS can manage its dependencies
@Injectable()
export class UsersRepository extends AbstractRepository<UserDocument> {
    // Create a class-specific logger instance
    // Protected makes it available to child classes but not to external code
    protected readonly logger = new Logger(UsersRepository.name);

    // Constructor to initialize the repository
    // @InjectModel decorator injects the Mongoose model for Users
    constructor(
        @InjectModel(UserDocument.name) userModel: Model<UserDocument>
    ) {
        // Pass the model to the parent AbstractRepository class
        super(userModel);
    }
}

