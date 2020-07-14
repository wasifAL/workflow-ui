import {Injectable} from '@angular/core';
import {RegisterRequestPayload} from '../register/registerRequest.payload';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginRequestPayload} from '../login/loginRequest.payload';
import {LoginResponse} from '../login/loginResponse.payload';
import {LocalStorageService} from 'ngx-webstorage';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) {
  }

  register(registerRequestPayload: RegisterRequestPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/auth/register', registerRequestPayload, {responseType: 'text'});
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/login', loginRequestPayload)
      .pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);
        this.localStorage.store('role', data.role);
        return true;
      }));
  }

}
