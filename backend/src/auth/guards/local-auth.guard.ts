import { AuthGuard } from "@nestjs/passport";

// local auth guard that extends the AuthGuard with the local strategy
export class LocalAuthGuard extends AuthGuard('local') {}