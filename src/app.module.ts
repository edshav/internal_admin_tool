import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [PrismaModule, AuthModule, ProjectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
