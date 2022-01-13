import { Module } from "@nestjs/common";
import { RepositoriesService } from "./repositories.service";
import { ARepositoryService } from "./types/abstract";
import { RepositoriesController } from "./controller/repositories.controller";



@Module({
  imports: [
  ],
  controllers: [RepositoriesController],
  providers: [
    {provide: ARepositoryService, useClass: RepositoriesService}
  ],
  exports: [ARepositoryService]
})
export class RepositoriesModule { }
