import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

import { Subscription } from 'rxjs/Subscription';

import { ITeam } from '../teams/teams';
import { TeamsService } from '../teams/teams.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnDestroy {

  pageTitle: string;
  team: ITeam;
  showImage = false;
  errorMessage: string;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute, private _router: Router, private _teamService: TeamsService) { }

  onVoteClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        const id = +params['id'];
        this.getTeam(id);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getTeam(id: number) {
    this._teamService.getTeam(id).subscribe(
      team => this.team = team,
      error => this.errorMessage = <any>error);
  }

}