import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  Login(credentials:any){
    return this.http.post(environment.baseURL+
      environment.AuthentificationBackendURL , credentials , this.httpOptions);
  }
  Register(credentials:any){
    return this.http.post(environment.baseURL+
      environment.RegistrationBackendURL , credentials , this.httpOptions);
  }
  getUserByEmail(email:any):Observable<User>{
    return this.http.get<User>(environment.baseURL+
      environment.UserBackendURL+"/findUserByEmail/"+email , this.httpOptions)
  }
}
