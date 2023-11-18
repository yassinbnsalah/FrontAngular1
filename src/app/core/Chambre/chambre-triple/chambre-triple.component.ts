import { Component, OnInit } from '@angular/core';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chambre-triple',
  templateUrl: './chambre-triple.component.html',
  styleUrls: ['./chambre-triple.component.css']
})
export class ChambreTripleComponent implements OnInit {
  nbChambresDisponibles: number = 0;

  constructor(private chamberService: ChamberService) {}

  ngOnInit() {
    this.loadNbChambresDisponibles();
  }

  private loadNbChambresDisponibles() {
    this.chamberService.getNbChambreParTypeEtBloc('Triple', 1).subscribe(
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

