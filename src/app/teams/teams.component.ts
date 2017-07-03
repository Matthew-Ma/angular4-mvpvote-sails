import { Component, OnInit } from '@angular/core';

import { ITeam } from './teams';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: ITeam[];
  errorMessage: string;

  constructor(private _teamService: TeamsService) { }

  ngOnInit() {
    this._teamService.getTeams().subscribe(teams => this.teams = teams, error => this.errorMessage = <any>error);
  }

}
