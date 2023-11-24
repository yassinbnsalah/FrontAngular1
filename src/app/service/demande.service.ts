import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demande } from '../model/Demande';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http :HttpClient) { }
  createDemande(demande:Demande):Observable<Demande>{
   return  this.http.post<Demande>(environment.baseURL+
      environment.DemandeBackendURL+"/createdemande",demande, this.httpOptions);
  }
}
