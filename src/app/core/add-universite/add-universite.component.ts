import { Component } from '@angular/core';
import { Universite } from 'src/app/model/Universite';
import { UniversiteService } from './service/universite.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs"; // Adjust the import path if needed

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent {


    universite: Universite = {
        idUniversite: 0,
        nomUniversite: '',
        adresse: '',
        statuts: '',
        description: '',
        email: '',
        firstNameAgent: '',
        lastNameAgent: '',
        imagebyte:'' , 
        // logo: null, // If you want to include logo
        image: null,
    };

    constructor(private universiteService: UniversiteService, private http :HttpClient) {}

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }


uploadImage(idUniversite:any){
  if (this.selectedFile) {
    console.log("ENTER");
    let formData = new FormData();
    formData.append('file', this.selectedFile,this.selectedFile.name);
    formData.forEach((value, key) => {
      console.log(key, value);
    });
    this.universiteService.uploadImg(formData,idUniversite).subscribe(
      (data) =>{
        console.log(data);
      }
    )
  }}


  onSubmit() {
    this.universiteService.addUniversite(this.universite).subscribe(
      (response) => {
        console.log('University added:', response);
        this.uploadImage(response.idUniversite)
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}



