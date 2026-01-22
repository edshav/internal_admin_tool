import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserContext } from 'src/common/types/user-context';

interface RequestWithUser extends Request {
  user: UserContext;
}

export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): UserContext => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    return request.user;
  },
);
