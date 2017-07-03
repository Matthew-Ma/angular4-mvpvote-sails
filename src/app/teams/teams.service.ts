import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ITeam } from './teams';
import { IPlayer } from './players';

@Injectable()
export class TeamsService {

  private _teamsUrl = 'http://localhost:1337/teams';
  private _playersUrl = 'http://localhost:1337/players';

  constructor(private _http: Http) { }

  getTeams(): Observable<ITeam[]> {
    return this._http.get(this._teamsUrl)
      .map((response: Response) => <ITeam[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getTeam(id: number): Observable<ITeam> {
    return this.getTeams()
      .map((teams: ITeam[]) => teams.find(p => p.id === id))
      .do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
  }

  getPlayers(): Observable<IPlayer[]> {
    return this._http.get(this._playersUrl)
      .map((response: Response) => <IPlayer[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
