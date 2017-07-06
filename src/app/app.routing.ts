import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { SignupComponent } from './signup/signup.component';
import { BarChartComponent } from './chart/chart.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AuthGuard } from './common/auth.guard';

const routes: Routes = [
  { path: 'chart', component: BarChartComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/ranking', pathMatch: 'full', canActivate: [AuthGuard] },
  {
    path: 'ranking', canActivate: [AuthGuard], children: [
      { path: 'list', component: RankingListComponent },
      { path: '', component: TeamsComponent, outlet: 'header' },
    ]
  },
  {
    path: 'players', canActivate: [AuthGuard], children: [
      { path: 'list/:id', component: PlayersComponent },
      { path: '', component: TeamsComponent, outlet: 'header' },
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '**', canActivate: [AuthGuard], component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PlayersComponent, PageNotFoundComponent];
