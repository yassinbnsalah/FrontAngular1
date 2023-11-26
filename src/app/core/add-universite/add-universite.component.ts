import {Component, OnInit} from '@angular/core';
import { Universite } from 'src/app/model/Universite';
import { UniversiteService } from './service/universite.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs"; // Adjust the import path if needed
import { ToastrService } from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit{

  universiteForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private universiteService: UniversiteService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.universiteForm = this.formBuilder.group({
      nomUniversite: [''],
      adresse: [''],
      statuts: [''],
      description: [''],
      email: [''],
      firstNameAgent: [''],
      lastNameAgent: [''],
    });
    const statuts = this.universiteForm.get('statuts');
    if (statuts) {
      statuts.setValue("En attente");
    }
  }


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

      const formData = this.universiteForm.value;
      console.log('Form submitted:', formData);

      this.universiteService.addUniversite(formData).subscribe(
        (data)=>{
          console.log('University added:', data);
          this.uploadImage(data.idUniversite);
        }
      );
  }
}




