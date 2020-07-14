import {Injectable} from '@angular/core';
import {RegisterRequestPayload} from '../register/registerRequest.payload';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(registerRequestPayload: RegisterRequestPayload): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/register', registerRequestPayload, {responseType:'text'});
  }
}
