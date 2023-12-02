// chambres.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/model/Bloc';
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
  errorMessage: string = '';
  selectedBloc: string = '';
  blocs: Bloc[] = []; 

  constructor(
    public   chamberService: ChamberService,
  
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    // Subscribe to changes in the route parameters
    this.route.paramMap.subscribe(params => {
      // Get the value of the 'nomBloc' parameter from the URL
      this.selectedBloc = params.get('nomBloc') || '';
      
      // Load chambers based on the selected bloc
      this.loadChambers();
      
      // Load all blocs
      this.loadBlocs();
    });
  }

  toggleHiddenSection() {
    this.showHiddenSection = true;
  }
 
  searchChambers() {
    if (!this.selectedBloc) {
      this.errorMessage = 'Veuillez choisir un Bloc.';
      this.showHiddenSection = false;
      return;
    }
  
    this.chamberService.getChambresByNomBloc(this.selectedBloc).subscribe(
      (data) => {
        console.log(data);
        this.chambers = data;
        this.showHiddenSection = this.chambers.length > 0;
      },
      (error) => {
        console.error(error);
        this.showHiddenSection = false;
      }
    );
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
  loadBlocs() {
    this.chamberService.getAllBlocs().subscribe(
      (data) => {
        console.log(data);
        this.blocs = data;
       
      },
      (error) => {
        console.error(error);
     
      }
    );
  }
  onBlocChange() {
    // Update the URL with the selected bloc
    this.router.navigate(['chambres', { nomBloc: this.selectedBloc }]);
  }
}
