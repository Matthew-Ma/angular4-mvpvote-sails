import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import * as Globals from '../globals';

@Injectable()
export class AuthenticationService implements OnInit {
  public token: string;
  Token: any;
  constructor(private http: Http) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(email: string): Observable<boolean> {
    return this.http.post(Globals.APP_SERVER + 'signup', JSON.stringify({ email: email }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const token = response.json() && response.json().response.data.token;
        const voted = response.json() && response.json().response.data.voted;
        console.log(token);
        console.log(voted);
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
          localStorage.setItem('voted', voted);
          console.log(localStorage.getItem('currentUser'));
          console.log(localStorage.getItem('voted'));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }).catch(this.handleError);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We"d also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(false);
  }

  ngOnInit() {
  }
}
