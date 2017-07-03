import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlayersComponent } from './players/players.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'players/:id', component: PlayersComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PlayersComponent, PageNotFoundComponent];
