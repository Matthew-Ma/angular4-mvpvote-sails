import { Http, Headers, RequestOptions, Response } from '@angular/http';

const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
const currentUserSess = JSON.parse(localStorage.getItem('currentUser'));
this.token = currentUserSess && currentUserSess.token;
contentHeaders.append('authorization', 'Bearer ' + this.token);
export const options = new RequestOptions({ headers: contentHeaders });
