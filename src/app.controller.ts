import { Controller, Get } from '@nestjs/common';
import { ProjectModel } from 'generated/prisma/models';
import { PrismaService } from './prisma.service';
@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('users')
  getAllProjects(): Promise<ProjectModel[]> {
    return this.prismaService.project.findMany();
  }
}
