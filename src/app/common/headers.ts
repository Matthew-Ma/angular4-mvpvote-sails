import { Http, Headers, RequestOptions, Response } from '@angular/http';

const contentHeaders = new Headers();
const currentUserSess = JSON.parse(localStorage.getItem('currentUser'));
this.token = currentUserSess && currentUserSess.token;
contentHeaders.append('authorization', 'Bearer ' + this.token);
export const options = new RequestOptions({ headers: contentHeaders });
