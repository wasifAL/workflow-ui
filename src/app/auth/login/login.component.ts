import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginRequestPayload} from './loginRequest.payload';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isError: boolean;
  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;

  constructor(private authService: AuthService) {
    this.isError = false;
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  // tslint:disable-next-line:typedef
  login() {
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;
    this.authService.login(this.loginRequestPayload).subscribe(() => {
      this.isError = false;
      console.log('Login Successful');
    }, () => {
      this.isError = true;
      console.log('Login Failed');
    });
  }
}
