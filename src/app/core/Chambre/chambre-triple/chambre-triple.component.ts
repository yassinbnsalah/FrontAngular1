import { Component, OnInit } from '@angular/core';
import { Chamber } from 'src/app/model/Chamber';
import { TypeChamber } from 'src/app/model/TypeChamber ';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chambre-triple',
  templateUrl: './chambre-triple.component.html',
  styleUrls: ['./chambre-triple.component.css']
})
export class ChambreTripleComponent implements OnInit {
  chambres: Chamber[] = [];

  constructor(private chamberService: ChamberService) {}

  ngOnInit() {
    this.loadChambres();
  }

  private loadChambres() {
  
    this.chamberService.getChambersByType(TypeChamber.Triple).subscribe(
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