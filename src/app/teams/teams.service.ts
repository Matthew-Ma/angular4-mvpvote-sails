import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import * as Globals from '../globals';

import { ITeam } from './teams';
import { IPlayer } from './players';

@Injectable()
export class TeamsService {

  private _teamsUrl = Globals.APP_URL + 'teams';
  private _playersUrl = Globals.APP_URL + 'players';
  private token: string;

  constructor(private http: Http) { }

  getTeams(): Observable<ITeam[]> {
    return this.http.get(this._teamsUrl)
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
    return this.http.get(this._playersUrl)
      .map((response: Response) => <IPlayer[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  vote(playerID: number, currentUser: string): Observable<boolean> {
    const contentHeaders = new Headers();
    const currentUserSess = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUserSess, 'headers');
    this.token = currentUserSess && currentUserSess.token;
    contentHeaders.append('authorization', 'Bearer ' + this.token);
    const options = new RequestOptions({ headers: contentHeaders });

    return this.http.post(Globals.APP_SERVER + 'vote', JSON.stringify({ playerID: playerID, currentUser: currentUser }), options)
      .map((response: Response) => {
        console.log(response.json(), 'player vote');
        return response.json().response.data.byTeams;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
