import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Role } from 'generated/prisma/client';

export interface AuthenticatedUser {
  id: number;
  role: Role;
}

interface RequestWithUser extends Request {
  user: AuthenticatedUser;
}

export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): AuthenticatedUser => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    return request.user;
  },
);
