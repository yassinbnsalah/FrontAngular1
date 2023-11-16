import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
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
    private apiUrl = 'http://localhost:8080/addUniversiteSans';
    private apiUrl2 = 'http://localhost:8080/addUniversite';
    private api = 'http://localhost:8080/uploadImg/';

    private baseUrl = 'http://localhost:8080/findAllU';

    constructor(private http: HttpClient) { }

  uploadImg(formData: FormData, idUniversite : any) : Observable<Universite>{
      return this.http.post<Universite>(this.api+idUniversite, formData);
  }
    addUniversityWithImage(universite: Universite): Observable<any> {
        const formData: FormData = new FormData();

        Object.entries(universite).forEach(([key, value]) => {
            if (key === 'image' && value) {
                formData.append('image', value as Blob, (value as File).name);
            } else {
                formData.append(key, String(value));
            }
        });

        return this.http.post(`${this.apiUrl2}`, formData);
    }

  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(`${this.apiUrl}`, universite,this.httpOptions);}

  findUniversite(): Observable<Universite[]> {
    return this.http.get<Universite[]>(this.baseUrl);
  }


}



