import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Universite } from 'src/app/model/Universite';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private apiUrl = 'http://localhost:8080/addUniversiteSans';
  private apiUrl2 = 'http://localhost:8080/addUniversite';
  private api = 'http://localhost:8081/UniversiteRestController/uploadImg/';

  private baseUrl = 'http://localhost:8080/findAllU';

  constructor(private http: HttpClient) { }

  uploadImg(formData: FormData, idUniversite: any): Observable<Universite> {
    return this.http.post<Universite>(this.api + idUniversite, formData);
  }


  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(
      environment.baseURL + environment.UniversiteBackendAPIS + "/addUniversite", universite, this.httpOptions);
  }



  findUniversite(): Observable<Universite[]> {
    return this.http.get<Universite[]>(environment.baseURL + environment.UniversiteBackendAPIS + "/findAll");
  }


}



