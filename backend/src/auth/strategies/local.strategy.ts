import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UsersService } from "src/users/users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService) {
        super({
            usernameField: 'email',
        });
    }

    // validate user credentials, this method is used by the local strategy that is imported in auth.module.ts
    async validate(email: string, password: string) {
        try {
            return this.usersService.verifyUser(email, password);
        } catch (error) {
            throw new UnauthorizedException(error);
        }
    }
}