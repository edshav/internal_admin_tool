import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current_user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import type { UserContext } from 'src/common/types/user-context';
import { ProjectService } from './project.service';

@Controller('projects') // Handles all routes starting with /projects
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllProjects(@CurrentUser() user: UserContext) {
    return this.projectService.projects(user);
  }
}
