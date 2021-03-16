import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './login.service';

export class User {
  constructor(
    public id: string,
    public password: string
  ){}
}

export class LoginData {
  constructor(
    public client_id: string,
    public user: User
  ) {}
}

export class LoginResponse {
  constructor(
    public success: string,
    public isUserAuthenticated: string
  ) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService) { }

  error: boolean = false;
  errorText: string = '';
  userid: string = '';
  pwd: string = '';

  loginData: LoginData;
  loginResponse: LoginResponse;

  ngOnInit(): void {
    this.loginData = new LoginData("iJavaScript", new User("", ""));

  }

  authenticate(){
    this.loginData.user.id = this.userid;
    this.loginData.user.password = this.pwd;

    //console.log(this.loginData);
    this.loginService.authenticateUser(this.loginData).subscribe(
      response => {
        this.loginResponse = response;
        //console.log(this.loginResponse);
        if(this.loginResponse.isUserAuthenticated === "false") {
          console.log("not authenticated");
          this.error = true;
          this.errorText = 'Error: Invalid User Credentials!';
          this.userid = '';
          this.pwd = '';
        } else {
          this.error = false;
          this.errorText = '';
          this.router.navigate(['dashboard']);
          this.userid = '';
          this.pwd = '';
        }
      },
      error => {
        console.log(error);
        this.error = true;
        this.errorText = 'Error: Unknown Error!';
        this.userid = '';
        this.pwd = '';
      }
    )
  }

}
