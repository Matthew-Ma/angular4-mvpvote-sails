import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthHttp, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

  jwtHelper: JwtHelper = new JwtHelper();
  Token: any;

  constructor(private router: Router) { }

  canActivate() {
    if (!localStorage.getItem('currentUser')) {
      // not logged in so redirect to login page
      this.router.navigate(['/signup']);
      return false;
    }
    this.Token = JSON.parse(localStorage.getItem('currentUser'));
    console.log(localStorage.getItem('currentUser'));

    if (!this.Token.token) {
      // not logged in so redirect to login page
      this.router.navigate(['/signup']);
      return false;
    }

    if (this.jwtHelper.isTokenExpired(this.Token.token)) {
      // not logged in so redirect to login page
      this.router.navigate(['/signup']);
      return false;
    }

    console.log(
      this.jwtHelper.decodeToken(this.Token.token),
      this.jwtHelper.getTokenExpirationDate(this.Token.token),
      this.jwtHelper.isTokenExpired(this.Token.token)
    );
    // logged in so return true
    return true;
  }
}
