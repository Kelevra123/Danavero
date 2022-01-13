import { RepositoriesDto } from "../dto/repositories.dto";



export abstract class ARepositoryService {
  public abstract fetch(repoDto: RepositoriesDto): Promise<any>
}

