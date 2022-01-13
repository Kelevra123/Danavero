import { Body, Controller, Get } from "@nestjs/common";
import { ARepositoryService } from "../types/abstract";
import { RepositoriesDto } from "../dto/repositories.dto";



@Controller('repo')
export class RepositoriesController {

  constructor(
    private readonly _repositoriesService: ARepositoryService
  ) {
  }

  @Get()
  getData(@Body() repoDto: RepositoriesDto): Promise<any> {
    return this._repositoriesService.fetch(repoDto)
  }

}
