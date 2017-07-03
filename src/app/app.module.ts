import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';

import { MdMenuModule, MdTabsModule, MdInputModule } from '@angular/material';
import 'hammerjs';

import { SearchPipe } from './ranking-list/search.pipe';
import { SortPipe } from './ranking-list/sort.pipe';

import { AppRoutingModule, routingComponents } from './app.routing';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { PlayersComponent } from './players/players.component';
import { BarChartComponent } from './chart/chart.component';
import { TeamsComponent } from './teams/teams.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TeamsService } from './teams/teams.service';
import { SignupComponent } from './signup/signup.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    routingComponents,
    PlayersComponent,
    TeamsComponent,
    SignupComponent,
    SearchPipe,
    SortPipe,
    RankingListComponent
  ],
  imports: [
    BrowserModule,
    MdMenuModule,
    MdTabsModule,
    MdInputModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    //TeamsService, AuthGuard, ...AUTH_PROVIDERS
    TeamsService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
