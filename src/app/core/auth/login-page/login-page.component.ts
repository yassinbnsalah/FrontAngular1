import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/AuthServices/auth.service';
import { JwtService } from 'src/app/AuthServices/jwt.service';
import { StorageService } from 'src/app/AuthServices/storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  credentials = {
    email: "",
    password: ""
  }
  credentailsRegistration={
    nomEt :"",
    prenomEt:"",
    ecole:"",
    cin:"",
  //  dateNaissance:"2020-04-05",
    email:"",
    password:"",
  }
  roles: string = "ROLE_USER";
  constructor(private authService: AuthService,
     private storageService: StorageService, private jwtService: JwtService,
     private router : Router) { }
  isSuccessful = false;
  isSignUpFailed = false;
  register(){
    console.log(this.credentailsRegistration);
    this.authService.Register(this.credentailsRegistration).subscribe(
      (data) =>{
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
       (err) => {
        console.log(err);
        
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    )
  }
  login() {
    console.log(this.credentials);
    this.authService.Login(this.credentials).subscribe(
      (data: any) => {
        const token = data.accessToken;

        const decodedToken = this.jwtService.decodeToken(token);
        console.log('Decoded Token:', decodedToken); // Log the decoded token

        this.storageService.saveUser(decodedToken);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = decodedToken.role;
        console.log(this.roles);
        this.router.navigate(['/home'])
        /// REDIRECTION AGENT AND ADMIN 
      },
      (error) => {
        console.log("invalid credentials");
      }
    )

  }
}
