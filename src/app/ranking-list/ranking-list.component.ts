import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { Subscription } from 'rxjs/Subscription';

import { IPlayer } from '../teams/players';
import { TeamsService } from '../teams/teams.service';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RankingListComponent implements OnInit {

  players: IPlayer[];
  errorMessage: string;
  searchText: string;
  showImage = false;
  imageWidth = 50;
  imageMargin = 0;

  isDesc = false;
  column: string;
  direction = 1;
  voted = false;

  playerID: number;
  currentUser: string;

  constructor(private teamService: TeamsService) { }

  sort(property): void {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  vote(playerID): void {
    this.playerID = playerID;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')).email;

    this.teamService.vote(this.playerID, this.currentUser)
      .subscribe(result => {

        this.getAllPlayers();

        localStorage.setItem('voted', JSON.stringify(1));
        if (+localStorage.getItem('voted') === 1) {
          this.voted = true;
        }

      }, err => {
        console.log(err);
      });

  }

  private getAllPlayers(): void {
    this.teamService.getPlayers().subscribe(
      players => this.players = players.sort((n1, n2) => {
        if (n1.votes > n2.votes) {
          return -1;
        }

        if (n1.votes < n2.votes) {
          return 1;
        }

        return 0;
      }),
      error => this.errorMessage = <any>error
    );
  }

  ngOnInit() {
    this.getAllPlayers();
    if (localStorage.getItem('voted') === 'true') {
      this.voted = true;
    }
  }

}
