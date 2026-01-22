import { Injectable } from '@nestjs/common';
import { UserContext } from 'src/common/types/user-context';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  projects(userContext: UserContext) {
    const where =
      userContext.role === 'USER' ? { ownerId: userContext.id } : undefined;

    return this.prisma.project.findMany({
      where,
      include: {
        customer: {
          select: { id: true, name: true },
        },
      },
    });
  }
}
