import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { PageRankingComponent } from './page-ranking/page-ranking.component';
import { PageMatchUpComponent } from './page-match-up/page-match-up.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    PageRankingComponent,
    PageMatchUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
