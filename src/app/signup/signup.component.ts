import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  signup() {
    event.preventDefault();
    this.loading = true;
    this.authenticationService.login(this.model.email)
      .subscribe(result => {
        console.log(result);

        if (result === true) {
          // login successful
          this.router.navigate(['/ranking']);
        } else {
          // login failed
          this.error = 'Email is incorrect';
          this.loading = false;
        }
      });
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

}
