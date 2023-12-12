import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/AuthServices/auth.service';
import { JwtService } from 'src/app/AuthServices/jwt.service';
import { StorageService } from 'src/app/AuthServices/storage.service';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';



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
  constructor(private authService: AuthService,private _snackBar: MatSnackBar,
     private storageService: StorageService, private jwtService: JwtService,
     private router : Router) { }
  isSuccessful = false;
  isSignUpFailed = false;


  login() {
    console.log(this.credentials);
    console.log("fff");

    this.authService.Login(this.credentials).subscribe(
      (data: any) => {
        const token = data.accessToken;
        const decodedToken = this.jwtService.decodeToken(token);
        console.log('Decoded Token:', decodedToken);

        this.storageService.saveUser(decodedToken);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = decodedToken.role;
        console.log(this.roles);
        this.router.navigate(['/home']);
        this.openSnackBar("Connexion réussie.");
      },
      (error) => {
        console.log("invalid credentials");
        if (error.status === 404) {
          this.openSnackBar("Utilisateur non trouvé. Veuillez vous inscrire.");
        } else if (error.status === 401) {
          this.openSnackBar("Account is inactive. Veuillez verifiez votre boite email.");
        } else {
          this.openSnackBar("Invalid credentials.");
        }
      }
    );
  }

  openSnackBar(message: string) {
    
    this._snackBar.open(message, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    });
  }
}