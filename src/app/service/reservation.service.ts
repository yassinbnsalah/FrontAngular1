import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../model/Reservation';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http : HttpClient) { }
  getReservationById(email:any):Observable<Reservation[]>{
    return this.http.get<Reservation[]>(environment.baseURL+
      environment.ReservationBackendAPIS+"/findReservationByIDEtudiant/"+email , this.httpOptions)
  }
  getReservationByID(id:any):Observable<Reservation>{
    return this.http.get<Reservation>(environment.baseURL
      +environment.ReservationBackendAPIS+"/findReservationByID/"+id,this.httpOptions)
  }

}
