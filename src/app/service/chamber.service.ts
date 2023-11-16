import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chamber } from '../model/Chamber';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChamberService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http : HttpClient) { }
  getAllChamber():Observable<Chamber[]>{
    return this.http.get<Chamber[]>(environment.baseURL
      +environment.ChamberBackendAPIS+"/findAllChambers",this.httpOptions)
  }

  getChamberByID(id:any):Observable<Chamber>{
    return this.http.get<Chamber>(environment.baseURL
      +environment.ChamberBackendAPIS+"/findChamberByID/"+id,this.httpOptions)
  }
  addChamber(chamber:Chamber):Observable<Chamber>{
    return this.http.post<Chamber>(environment.baseURL
      +environment.ChamberBackendAPIS+"/addChamber",chamber)
  }
  updateChamber(chamber: Chamber): Observable<Chamber> {
  return this.http.put<Chamber>(environment.baseURL
    +environment.ChamberBackendAPIS+"/updateChamber", chamber);
}

getChamberByReservationID(reservationID: string): Observable<Chamber> {
  const url = `${environment.baseURL}${environment.ChamberBackendAPIS}/findChamberByReservationID/${reservationID}`;
  return this.http.get<Chamber>(url);
}
}
