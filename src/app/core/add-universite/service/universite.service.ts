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

    constructor(private http: HttpClient) { }

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
}

