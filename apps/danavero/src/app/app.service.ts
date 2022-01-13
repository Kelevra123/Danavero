import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "./modules/types";



@Injectable()
export class AppService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  public fetch(search: string): Observable<any> {
    return this._http.get(`https://api.github.com/search/users?q=${search}&page=1&per_page=20`)
  }

  public fetchOne(id: number): Observable<IUser | any> {
    return this._http.get(`https://api.github.com/user/${id}`)
  }

}
