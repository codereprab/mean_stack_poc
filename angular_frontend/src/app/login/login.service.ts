import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from './login.component';
import { LoginResponse } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticateUser(loginData: LoginData) {
    return this.http.post<LoginResponse>("http://localhost:3000/api/authenticateUser", loginData);
  }
}
