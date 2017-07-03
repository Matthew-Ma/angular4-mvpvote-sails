import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';

import { MdMenuModule, MdTabsModule } from '@angular/material';
import 'hammerjs';


import { AppRoutingModule, routingComponents } from './app.routing';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { PlayersComponent } from './players/players.component';
import { BarChartComponent } from './chart/chart.component';
import { TeamsComponent } from './teams/teams.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { TeamsService } from './teams/teams.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    routingComponents,
    PlayersComponent,
    TeamsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    MdMenuModule,
    MdTabsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [
    //TeamsService, AuthGuard, ...AUTH_PROVIDERS
    TeamsService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
