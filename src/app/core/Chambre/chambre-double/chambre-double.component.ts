import { Component, OnInit } from '@angular/core';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chambre-double',
  templateUrl: './chambre-double.component.html',
  styleUrls: ['./chambre-double.component.css']
})
export class ChambreDoubleComponent implements OnInit {
  nbChambresDisponibles: number = 0;

  constructor(private chamberService: ChamberService) {}

  ngOnInit() {
    this.loadNbChambresDisponibles();
  }

  private loadNbChambresDisponibles() {
    this.chamberService.getNbChambreParTypeEtBloc('Double', 1).subscribe(
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


