import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
// import { UserModel } from 'generated/prisma/models';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  // projects(userContext: Pick<UserModel, 'id' | 'role'>) {
  projects() {
    const queryOptions: Prisma.ProjectFindManyArgs = {};
    // if (userContext.role === 'USER') {
    //   queryOptions.where = {
    //     ownerId: userContext.id,
    //   };
    // }
    return this.prisma.project.findMany(queryOptions);
  }
}
