import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: String = '';
  password: String = '';
  invalidFilling: boolean = false;
  invalidUsername: boolean = false;
  invalidPassword: boolean = false;

  constructor(private route: Router) {}
  validate(): boolean {
    if (!this.username.match(/^[A-Za-z0-9_-]*$/g)) {
      this.invalidUsername = true;
      this.invalidFilling = false;
      this.invalidPassword = false;
      return false;
    } else if (!this.password.match(/^[A-Za-z0-9_-]*$/g)) {
      this.invalidPassword = true;
      this.invalidUsername = false;
      this.invalidFilling = false;
      return false;
    } else this.route.navigate(['/contactus']);
    return true;
  }
  ngOnInit(): void {}
  onSubmit(f: NgForm): void {
    if (f.form.status === 'INVALID') {
      this.invalidPassword = false;
      this.invalidUsername = false;
      this.invalidFilling = true;
    } else {
      if (this.validate()) this.route.navigate(['/contactus']);
    }
  }
}
