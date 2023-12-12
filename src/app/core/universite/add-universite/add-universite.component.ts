import {Component, OnInit} from '@angular/core';
import { Universite } from 'src/app/model/Universite';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs"; // Adjust the import path if needed
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { UniversiteService } from '../../service/universite.service';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {EmailValidator} from "../../demande/CinValidator";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit{

  universiteForm!: FormGroup;
  isUniversityNameUnique = true;

  constructor(
    private formBuilder: FormBuilder,
    private universiteService: UniversiteService,
    private http: HttpClient,
    private router : Router,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.universiteForm = this.formBuilder.group({
      nomUniversite: ['',Validators.required],
      adresse: ['',Validators.required],
      statuts: ['',Validators.required],
      description: ['',Validators.required],
      email: ['',[Validators.required,EmailValidator()]],
      firstNameAgent: ['',Validators.required],
      lastNameAgent: ['',Validators.required],
    });
    const statuts = this.universiteForm.get('statuts');
    if (statuts) {
      statuts.setValue("En attente");
    }
  }


  imagePreview: SafeUrl | null = null;
  logoPreview :SafeUrl | null = null;
  selectedFile!: File ;
  selectedLogo!: File ;
  selectedJustification!: File ;
  selectedAttestation!: File ;


  onLogoSelected(event: any) {
    this.selectedLogo = event.target.files[0];
    this.showPreview(this.selectedLogo, true);
  }

  onJustificationSelected(event: any) {
    this.selectedJustification = event.target.files[0];
  }

  onAttestationSelected(event: any) {
    this.selectedAttestation = event.target.files[0];
  }
  uploadImage(idUniversite: any) {
      console.log("ENTER");
      let formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      formData.append('logo', this.selectedLogo!, this.selectedLogo?.name);
      formData.append('justification', this.selectedJustification!, this.selectedJustification?.name);
      formData.append('attestation', this.selectedAttestation!, this.selectedAttestation?.name);
      formData.forEach((value, key) => {
        console.log(key, value);
      });

      this.universiteService.uploadImg(formData, idUniversite).subscribe(
        (data) => {
          console.log(data);
        }
      );
  }

    onFileSelected(event: any) {
        console.log('File selected:', event.target.files[0]);
        this.selectedFile = event.target.files[0];
        this.showPreview(this.selectedFile);
    }

  showPreview(file: File | null, isLogo: boolean = false) {
    console.log(`Show preview for ${isLogo ? 'logo' : 'image'}:`, file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (isLogo) {
          this.logoPreview = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
        } else {
          this.imagePreview = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }

   onSubmit() {

      const formData = this.universiteForm.value;
      console.log('Form submitted:', formData);

      this.universiteService.addUniversite(formData).subscribe(
        (data)=>{
          console.log('University added:', data);
          this.uploadImage(data.idUniversite);
          this.showToast();
        }
      );

  }

  showToast() {
    this.toastr.success('Your university request is sended successfully!', 'Success', {
      closeButton: true,
    });
  }
  /*onSubmit() {
    // Check if the university name is unique before submitting
    const universityName = this.universiteForm.get('nomUniversite')?.value;

    this.universiteService.checkUniversityNameUnique(universityName).subscribe(
      (isUniversityNameUnique) => {
        if (isUniversityNameUnique) {
          console.log(isUniversityNameUnique)
          // If the name is unique, proceed with the form submission
          const formData = this.universiteForm.value;
          console.log('Form submitted:', formData);

          this.universiteService.addUniversite(formData).subscribe(
            (data) => {
              console.log('University added:', data);
              this.uploadImage(data.idUniversite);
            },
            (error) => {
              console.error('Error adding university:', error);
            }
          );
        } else {
          console.log('University name already exists. Choose a different name.');
          // Handle accordingly, e.g., display an error message
        }
      },
      (error) => {
        console.error('Error checking university name uniqueness:', error);
      }
    );
  }*/

}




