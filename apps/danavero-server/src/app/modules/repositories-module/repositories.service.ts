import { Injectable } from "@nestjs/common";
import { ARepositoryService } from "./types/abstract";
import { HttpClient } from "@angular/common/http";
import { RepositoriesDto } from "./dto/repositories.dto";



@Injectable()
export class RepositoriesService extends ARepositoryService {

  constructor(
  ) {
    super();
  }

  async fetch(repoDto: RepositoriesDto): Promise<any> {
    // console.log(this.http.get(`https://api.github.com/search/repositories?q=${repoDto.search}`))
    // return this.http.get(`https://api.github.com/search/repositories?q=${repoDto.search}`)
    console.log(repoDto)
  }

}
