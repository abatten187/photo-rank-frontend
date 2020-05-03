import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMatchUpComponent } from "./page-match-up/page-match-up.component";
import { PageRankingComponent } from "./page-ranking/page-ranking.component";

const routes: Routes = [
  { path: '', component: PageMatchUpComponent },
  { path: 'ranking', component: PageRankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
