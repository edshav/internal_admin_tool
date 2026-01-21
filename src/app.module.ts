import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { ProjectService } from './project/project.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, ProjectService],
})
export class AppModule {}
