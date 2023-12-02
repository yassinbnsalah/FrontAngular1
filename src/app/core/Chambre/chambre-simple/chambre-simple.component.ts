import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chamber } from 'src/app/model/Chamber';
import { TypeChamber } from 'src/app/model/TypeChamber ';

import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chambre-simple',
  templateUrl: './chambre-simple.component.html',
  styleUrls: ['./chambre-simple.component.css']
})
export class ChambreSimpleComponent implements OnInit {
  chambres: Chamber[] = [];
  nomBloc: string = '';  // Declare the nomBloc property

  constructor(private chamberService: ChamberService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Extract the nomBloc parameter from the route
    this.nomBloc = this.route.snapshot.paramMap.get('nomBloc') || '';
    
    // Load chambres using the extracted nomBloc
    this.loadChambres();
  }

  private loadChambres() {
    this.chamberService.getChambersByTypeAndBloc(TypeChamber.Simple, this.nomBloc).subscribe(
      (data) => {
        console.log(data);
        this.chambres = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}