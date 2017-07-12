import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { Subscription } from 'rxjs/Subscription';

import { ITeam } from '../teams/teams';
import { TeamsService } from '../teams/teams.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit, OnDestroy {

  pageTitle: string;
  team: ITeam;
  showImage = false;
  errorMessage: string;
  private sub: Subscription;
  voted = false;
  playerID: number;
  currentUser: string;
  imageWidth = 190;

  constructor(private _route: ActivatedRoute, private _router: Router, private teamService: TeamsService) { }

  onVoteClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  vote(playerID): void {
    this.playerID = playerID;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')).email;

    this.teamService.vote(this.playerID, this.currentUser)
      .subscribe(result => {
        localStorage.setItem('voted', JSON.stringify(1));
        if (+localStorage.getItem('voted') === 1) {
          this.voted = true;
        }
      }, err => {
        console.log(err);
      });

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

    if (+localStorage.getItem('voted') === 1) {
      this.voted = true;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getTeam(id: number) {
    this.teamService.getTeam(id).subscribe(
      team => this.team = team,
      error => this.errorMessage = <any>error);
  }

}
