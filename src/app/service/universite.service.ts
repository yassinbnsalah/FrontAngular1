import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Universite } from '../model/Universite';
import { Observable } from 'rxjs';
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
    return this.http.post<Universite>(environment.baseURL+environment.UniversiteBackendAPIS+"/addUniversite", universite,this.httpOptions);
  }
}
