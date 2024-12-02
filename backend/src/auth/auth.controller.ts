import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { User } from 'src/users/entities/user.entity';
import { CurrentUser } from './current-user.decorator';
import { Response } from 'express';

// auth controller
@Controller('auth')
export class AuthController {
    // login endpoint
    @Post('login')
    @UseGuards(LocalAuthGuard)
    async Login(
        @CurrentUser() user: User,
        // passthrough: true allows the response to be passed through to the client
        @Res({ passthrough: true }) response: Response
    ) {
        return user;
    }
}
