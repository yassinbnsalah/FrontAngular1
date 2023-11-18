import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamber } from 'src/app/model/Chamber';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chambre-simple',
  templateUrl: './chambre-simple.component.html',
  styleUrls: ['./chambre-simple.component.css']
})
export class ChambreSimpleComponent implements OnInit {
  nbChambresDisponibles: number = 0;

  constructor(private chamberService: ChamberService) {}

  ngOnInit() {
    this.loadNbChambresDisponibles();
  }

  private loadNbChambresDisponibles() {
    this.chamberService.getNbChambreParTypeEtBloc('Simple', 1).subscribe(
      (data) => {
        console.log(data);
        this.nbChambresDisponibles = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
