import { Http, Headers, RequestOptions, Response } from '@angular/http';

const contentHeaders = new Headers();
const currentUserSess = JSON.parse(localStorage.getItem('currentUser'));
console.log(currentUserSess);
this.token = currentUserSess ? currentUserSess.token : null;
contentHeaders.append('authorization', 'Bearer ' + this.token);
export const options = new RequestOptions({ headers: contentHeaders });
