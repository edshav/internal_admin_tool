import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { AuthenticatedUser } from 'src/auth/current_user.decorator';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  projects(userContext: AuthenticatedUser) {
    const queryOptions: Prisma.ProjectFindManyArgs = {};
    if (userContext.role === 'USER') {
      queryOptions.where = {
        ownerId: userContext.id,
      };
    }
    return this.prisma.project.findMany(queryOptions);
  }
}
