import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';

import { MdMenuModule, MdTabsModule, MdInputModule, MdButtonModule, MdProgressSpinnerModule,MdIconModule } from '@angular/material';
import 'hammerjs';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { SearchPipe } from './ranking-list/search.pipe';
import { SortPipe } from './ranking-list/sort.pipe';

import { AppRoutingModule, routingComponents } from './app.routing';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { PlayersComponent } from './players/players.component';
import { BarChartComponent } from './chart/chart.component';
import { TeamsComponent } from './teams/teams.component';

import { AuthenticationService } from './signup/authentication.service';
import { UserService } from './signup/user.service';
import { TeamsService } from './teams/teams.service';
import { SignupComponent } from './signup/signup.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';

import { HighlightDirective } from './ranking-list/highlight.directive';


declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

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
    RankingListComponent,
    HighlightDirective,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    MdMenuModule,
    MdTabsModule,
    MdInputModule,
    MdButtonModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartModule,
    MdProgressSpinnerModule,
    MdIconModule,
  ],
  providers: [
    // TeamsService, AuthGuard, ...AUTH_PROVIDERS
    TeamsService,
    AuthenticationService,
    UserService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
