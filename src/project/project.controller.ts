import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  type AuthenticatedUser,
  CurrentUser,
} from 'src/auth/current_user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { ProjectService } from './project.service';

@Controller('projects') // Handles all routes starting with /projects
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllProjects(@CurrentUser() user: AuthenticatedUser) {
    return this.projectService.projects(user);
  }
}
