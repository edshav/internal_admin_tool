import { Controller, Get } from '@nestjs/common';
import { ProjectModel } from 'generated/prisma/models';
import { ProjectService } from './project/project.service';

@Controller()
export class AppController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('projects')
  async getAllProjects(): Promise<ProjectModel[]> {
    return this.projectService.projects();
  }
}
