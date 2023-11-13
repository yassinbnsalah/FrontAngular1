import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
 

  constructor(private http: HttpClient) { }

  addUniversite(universite: Universite): Observable<Universite> {
  return this.http.post<Universite>(
    environment.baseURL+environment.UniversiteBackendAPIS+"/addUniversite", universite,this.httpOptions);
  }

  /*addUniversite(universiteData: FormData): Observable<Universite> {
    const httpOptions = {
      headers: new HttpHeaders(),
    };

    return this.http.post<Universite>(`${this.apiUrl}`, universiteData, httpOptions);
  }*/




}
