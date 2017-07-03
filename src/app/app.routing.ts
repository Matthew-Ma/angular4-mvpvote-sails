import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlayersComponent } from './players/players.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'ranking-list', component: RankingListComponent },
  { path: 'players/:id', component: PlayersComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PlayersComponent, PageNotFoundComponent];
