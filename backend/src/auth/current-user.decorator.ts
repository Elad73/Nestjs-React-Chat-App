import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "src/users/entities/user.entity";

const getCurrentUserByContext = (context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest();
    return request.user;
}
// decorator to get the current user from the request object
export const CurrentUser = createParamDecorator(
    (_data: unknown, context: ExecutionContext) => {
        return getCurrentUserByContext(context);
    }
);