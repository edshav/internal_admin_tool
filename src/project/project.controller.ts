import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('projects') // Handles all routes starting with /projects
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getAllProjects() {
    return this.projectService.projects();
  }
}
