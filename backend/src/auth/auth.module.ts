import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
  // import the UsersModule so it can be used in this module
  imports: [UsersModule],
  // register the AuthService and LocalStrategy so they can be used in other modules
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
