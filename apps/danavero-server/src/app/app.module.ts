import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriesModule } from "./modules/repositories-module/repositories.module";
import { RepositoriesController } from "./modules/repositories-module/controller/repositories.controller";



@Module({
  imports: [
    RepositoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
