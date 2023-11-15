import { Component } from '@angular/core';
import { Universite } from 'src/app/model/Universite';
import { UniversiteService } from './service/universite.service';
import {HttpHeaders} from "@angular/common/http"; // Adjust the import path if needed

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent {
    /*  universite: Universite = new Universite();
      selectedFile: File | null = null;

        constructor(private universiteService: UniversiteService) {} // Fix the parameter name

      onSubmit() {
        this.universiteService.addUniversite(this.universite).subscribe(
          (response) => {
            console.log('University added:', response);
            this.universite = new Universite();
          },
          (error) => {
            console.error('Error:', error);
          }
        );
      }*/
    universite: Universite = {
        idUniversite: 0, // Set an appropriate initial value for idUniversite
        nomUniversite: '',
        adresse: '',
        statuts: '',
        description: '',
        email: '',
        firstNameAgent: '',
        lastNameAgent: '',
        // logo: null, // If you want to include logo
        image: null,
    };

    constructor(private universiteService: UniversiteService) {}

    onFileChange(event: any) {
        this.universite.image = event.target.files[0] || null;
    }

/*    onSubmit() {
        const formData = new FormData();
        Object.entries(this.universite).forEach(([key, value]) => {
            if (key === 'image' && value) {
                formData.append('image', value as Blob, (value as File).name);
            } else {
                formData.append(key, String(value));
            }
        });

        this.universiteService.saveUniversity(formData).subscribe(
            (response) => {
                console.log('University added successfully', response);
                // Handle success (e.g., navigate to another page)
            },
            (error) => {
                console.error('Failed to add University with Image', error);
                // Handle error appropriately
            }
        );
    }*/
    onSubmit() {
        this.universiteService.addUniversityWithImage(this.universite).subscribe(
            (response) => {
                console.log('Response:', response);
                // Handle success (e.g., navigate to another page)
            },
            (error) => {
                console.error('Failed to add University with Image', error);
                // Handle error appropriately
            }
        );
    }

}



