import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  {
    path: 'ranking', children: [
      { path: 'list', component: RankingListComponent },
      { path: '', component: TeamsComponent, outlet: 'header' },
    ]
  },
  {
    path: 'players', children: [
      { path: 'list/:id', component: PlayersComponent },
      { path: '', component: TeamsComponent, outlet: 'header' },
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PlayersComponent, PageNotFoundComponent];
