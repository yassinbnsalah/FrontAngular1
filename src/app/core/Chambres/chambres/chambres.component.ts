import { Component, OnInit } from '@angular/core';
import { Chamber } from 'src/app/model/Chamber';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {
  showHiddenSection: boolean = false;
  searchTerm: string = '';
  chambers: Chamber[] = [];

  constructor(public chamberService: ChamberService) {}

  ngOnInit() {
    this.loadChambers();
  }

  toggleHiddenSection() {
    this.showHiddenSection = true;
  }
 
  
  searchChambers() {
    console.log("recherche effectué");
    this.chamberService.getChambresByNomBloc(this.searchTerm).subscribe(
      (data) => {
        console.log(data);
        this.chambers = data;
      },
      (error) => {
        console.error(error);
      }
    );
    this.showHiddenSection = true;
  }

 

  private loadChambers() {
    this.chamberService.getAllChamber().subscribe(
      (data) => {
        console.log(data);
        this.chambers = data;

        // Load bloc names for each chamber
        this.chambers.forEach(chamber => {
          if (chamber.bloc) {
            this.chamberService.getBlocNameById(chamber.bloc.idBloc).subscribe(
              blocName => chamber.bloc.nomBloc = blocName
            );
          }
        });
        
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
