import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chamber } from '../model/Chamber';
import { environment } from 'src/environments/environment.development';
import { TypeChamber } from '../model/TypeChamber ';
import { Bloc } from '../model/Bloc';

@Injectable({
  providedIn: 'root'
})
export class ChamberService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private api = 'http://localhost:8081/ChamberRestController/uploadImg/';
  private apiUrl = 'http://localhost:8081/ChamberRestController/AddChamber';
  constructor(private http: HttpClient) { }
  getAllChamber(): Observable<Chamber[]> {
    return this.http.get<Chamber[]>(environment.baseURL
      + environment.ChamberBackendAPIS + "/findAllChambers", this.httpOptions)
  }

  getChamberByID(id: any): Observable<Chamber> {
    return this.http.get<Chamber>(environment.baseURL
      + environment.ChamberBackendAPIS + "/findChamberByID/" + id, this.httpOptions)
  }
  addChamber(chamber: Chamber): Observable<Chamber> {
    return this.http.post<Chamber>(environment.baseURL
      + environment.ChamberBackendAPIS + "/addChamber", chamber)
  }
  updateChamber(chamber: Chamber): Observable<Chamber> {
    return this.http.put<Chamber>(environment.baseURL
      + environment.ChamberBackendAPIS + "/updateChamber", chamber);
  }

  getChamberByReservationID(reservationID: string): Observable<Chamber> {
    const url = `${environment.baseURL}${environment.ChamberBackendAPIS}/findChamberByReservationID/${reservationID}`;
    return this.http.get<Chamber>(url);
  }
  getChambresByNomBloc(nomBloc: string): Observable<Chamber[]> {
    return this.http.get<Chamber[]>(`${environment.baseURL}${environment.ChamberBackendAPIS}/getChamberList/${nomBloc}`, this.httpOptions);
  }
  // méthode pour le service nbChambreParTypeEtBloc
  getNumberOfChambersByTypeAndBloc(type: string, idBloc: number): Observable<number> {
    const url = `${environment.baseURL}${environment.ChamberBackendAPIS}/nbChambreParTypeEtBloc/${type}/${idBloc}`;
    return this.http.get<number>(url, this.httpOptions);
  }

  // méthode pour le service getChambresNonReserveParNomFoyerEtTypeChambre
  getNonReservedChambersByNomFoyerAndTypeChambre(nomFoyer: string, type: string): Observable<Chamber[]> {
    const url = `${environment.baseURL}${environment.ChamberBackendAPIS}/chamberListNonReserver/${type}/${nomFoyer}`;
    return this.http.get<Chamber[]>(url, this.httpOptions);
  }
  getBlocNameById(idBloc: number): Observable<string> {
    const url = `${environment.baseURL}/api/blocs/getBlocNameById/${idBloc}`;
    return this.http.get<string>(url);
  }
  // méthode pour récupérer le nombre de chambres disponibles
  getNbChambreParTypeEtBloc(type: string, idBloc: number): Observable<number> {
    const url = `${environment.baseURL}${environment.ChamberBackendAPIS}/nbChambreParTypeEtBloc/${type}/${idBloc}`;
    return this.http.get<number>(url, this.httpOptions);
  }
  getChambersByType(type: TypeChamber): Observable<Chamber[]> {
    const url = `${environment.baseURL}${environment.ChamberBackendAPIS}/getChambersByType/${type}`;
    return this.http.get<Chamber[]>(url, this.httpOptions);
  }
  //method to check if the bloc exists
  checkBlocExistence(blocName: string): Observable<boolean> {
    const url = `${environment.baseURL}${environment.BlocBackendAPIS}/checkBlocExistence/${blocName}`;
    return this.http.get<boolean>(url, this.httpOptions);
  }
  uploadImg(formData: FormData, idChamber: any): Observable<Chamber> {
    return this.http.post<Chamber>(this.api + idChamber, formData);
  }
  addChamberWithImage(chamber: Chamber): Observable<any> {
    const formData: FormData = new FormData();

    Object.entries(chamber).forEach(([key, value]) => {
      if (key === 'image' && value) {
        formData.append('image', value as Blob, (value as File).name);
      } else {
        formData.append(key, String(value));
      }
    });

    return this.http.post(`${this.apiUrl}`, formData);
  }
  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${environment.baseURL}${environment.BlocBackendAPIS}/findAll`, this.httpOptions);
  }
  
  getChambersByTypeAndBloc(type: TypeChamber, blocName: string): Observable<Chamber[]> {
    const url = `${environment.baseURL}${environment.ChamberBackendAPIS}/byTypeAndBloc?type=${type}&blocName=${blocName}`;
    return this.http.get<Chamber[]>(url, this.httpOptions);
  }

  }

