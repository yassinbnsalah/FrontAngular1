import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foyer } from '../model/Foyer';
import { environment } from 'src/environments/environment.development';
import { Bloc } from '../model/Bloc';
import { Universite } from '../model/Universite';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http : HttpClient) { }
  getAllFoyer():Observable<Foyer[]>{
    return this.http.get<Foyer[]>(environment.baseURL
      +environment.FoyerBackendAPIS+"/findAllFoyer",this.httpOptions)
  }
  getBLocByFoyer(id:any):Observable<Bloc[]>{
    return this.http.get<Bloc[]>(environment.baseURL
      +environment.BlocBackendAPIS+"/findBLocByFoyer/"+id , this.httpOptions)
  }
  getUniversiteByFoyer(id:any):Observable<Universite[]>{
    return this.http.get<Universite[]>(environment.baseURL
      +environment.UniversiteBackendAPIS+"/findUniversiteByFoyer/"+id , this.httpOptions)
  }
  getFoyerByID(id:any):Observable<Foyer>{
    return this.http.get<Foyer>(environment.baseURL
      +environment.FoyerBackendAPIS+"/findByIdFoyer/"+id,this.httpOptions)
  }
}