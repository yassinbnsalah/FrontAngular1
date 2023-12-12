import {BehaviorSubject, catchError, Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http: HttpClient) {}
Login(credentials: any) {
    return this.http.post(environment.baseURL + environment.AuthentificationBackendURL, credentials, this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            console.error('Bad Request:', error.message);
          } else if (error.status === 401) {
            console.error('Unauthorized:', error.message);
          } else if (error.status === 403) {
            console.error('Forbidden:', error.message);
          } else {
            console.error('Server Error:', error.message);
          }
          return throwError(error);
        })
      );
  }

  Register(credentials: any): Observable<any> {
    return this.http.post(
      environment.baseURL + environment.RegistrationBackendURL,
      credentials,
      { ...this.httpOptions, responseType: 'text' }
    );
  }

  getUserByEmail(email:any):Observable<User>{
    return this.http.get<User>(environment.baseURL+
      environment.UserBackendURL+"/findUserByEmail/"+email , this.httpOptions)
  }
  isLoginMode = new BehaviorSubject<boolean>(true);
  isLoginMode$ = this.isLoginMode.asObservable();

  toggleMode() {
    this.isLoginMode.next(!this.isLoginMode.value);
  }

  ForgetPassword(email: string) {
    const params = new HttpParams().set('email', email);
    return this.http.get(environment.baseURL + 'UserRestController/SendEmail', { params })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle forget password errors here
          return throwError(error);
        })
      );
  }


}