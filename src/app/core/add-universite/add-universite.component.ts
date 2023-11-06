import { Component } from '@angular/core';
import { UniversiteService } from '../add-universite/service/universite.service';
import { Universite } from '../../model/Universite';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent {
  universite: Universite = new Universite();

  constructor(private universiteService: UniversiteService) {}

  onSubmit() {
    /*this.universiteService.addUniversite(this.universite).subscribe(
      (response) => {
        console.log('University added:', response);
        this.universite = new Universite();
      },
      (error) => {
        console.error('Error:', error);
      }
    );*/
  }
}
