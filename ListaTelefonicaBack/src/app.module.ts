import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [PrismaModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
