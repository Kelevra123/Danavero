import { Routes } from "@angular/router";
import { DetailComponent } from "./modules/detail-module/detail.component";
import { WrapperComponent } from "./wrapper/wrapper.component";



export enum RoutePathKey {
  MAIN = '',
  DETAIL = 'detail'
}

export const routes: Routes = [
  { path: RoutePathKey.MAIN, component: WrapperComponent },
  { path:`${RoutePathKey.DETAIL}/:user`, component: DetailComponent },
]


