import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlocksComponent } from './modules/blocks-module/blocks.component';
import { DetailComponent } from './modules/detail-module/detail.component';
import { TableComponent } from './modules/table-module/table.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AppService } from "./app.service";
import { HttpClientModule } from "@angular/common/http";
import { BlockElementComponent } from './modules/block-element/block-element.component';
import { TableElementComponent } from './modules/table-element/table-element.component';
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { DetailElementComponent } from './modules/detail-element/detail-element.component';



@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    DetailComponent,
    TableComponent,
    WrapperComponent,
    BlockElementComponent,
    TableElementComponent,
    DetailElementComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
