import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {RegisterRequestPayload} from './registerRequest.payload';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerRequestPayload: RegisterRequestPayload;
  registerForm: FormGroup;

  constructor(private authService: AuthService) {
    this.registerRequestPayload={
      username:'',
      email:'',
      password:''
    };
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  register() {
    this.registerRequestPayload.username = this.registerForm.get('username').value;
    this.registerRequestPayload.email = this.registerForm.get('email').value;
    this.registerRequestPayload.password = this.registerForm.get('password').value;

    this.authService.register(this.registerRequestPayload).subscribe(() => {
      console.log('Registration Successful');
    }, () => {
      console.log('Registration Failed');
    });
  }

}
