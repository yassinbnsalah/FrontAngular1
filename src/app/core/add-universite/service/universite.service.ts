import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from 'src/app/model/Universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private apiUrl = 'http://localhost:8081/UniversiteRestController/addUniversite';

  constructor(private http: HttpClient) { }

  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(`${this.apiUrl}`, universite,this.httpOptions);
  }
}
