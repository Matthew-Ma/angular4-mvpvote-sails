import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public router: Router, public http: Http) { }

  signup(event, userEmail) {
    event.preventDefault();
    const body = JSON.stringify({ userEmail });
    this.http.post('http://localhost:1337/users', body, { headers: contentHeaders })
      .subscribe(
      response => {
        localStorage.setItem('id_token', response.json().id_token);
        this.router.navigate(['home']);
      },
      error => {
        alert(error.text());
        console.log(error.text());
      }
      );
  }

  ngOnInit() {
  }

}
