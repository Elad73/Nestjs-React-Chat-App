// Import required NestJS and custom modules/components
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersRepository } from './users.repository';
import { DatabaseModule } from 'src/common/database/database.module';
import { User, UserSchema } from './entities/user.entity';

// @Module decorator to define module metadata
@Module({
  imports: [
    // Configure the DatabaseModule with User-specific schema
    // forFeature() is a static method that registers MongoDB models
    DatabaseModule.forFeature([
      { name: User.name, schema: UserSchema }
    ])
  ],
  // Register providers that can be injected into other classes
  // These services will be singleton instances shared across the module
  providers: [UsersResolver, UsersService, UsersRepository],
})
export class UsersModule {}
