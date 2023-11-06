import { Component } from '@angular/core';
import { Universite } from 'src/app/model/Universite';
import { UniversiteService } from 'src/app/service/universite.service';


@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent {
  universite: Universite = new Universite();

  constructor(private univerService : UniversiteService) {}

/*  onSubmit() {
    /*this.universiteService.addUniversite(this.universite).subscribe(
      (response) => {
        console.log('University added:', response);
        this.universite = new Universite();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }*/
}
