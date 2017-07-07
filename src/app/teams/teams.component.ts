import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ITeam } from './teams';
import { TeamsService } from './teams.service';
import { AuthenticationService } from '../signup/authentication.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: ITeam[];
  errorMessage: string;

  constructor(
    private _teamService: TeamsService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/signup');

  }

  ngOnInit() {
    this._teamService.getTeams().subscribe(teams => this.teams = teams, error => this.errorMessage = <any>error);
  }

}
