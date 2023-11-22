import { Component, OnInit } from '@angular/core';
import { Chamber } from 'src/app/model/Chamber';
import { TypeChamber } from 'src/app/model/TypeChamber ';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chambre-double',
  templateUrl: './chambre-double.component.html',
  styleUrls: ['./chambre-double.component.css']
})
export class ChambreDoubleComponent implements OnInit {
  chambres: Chamber[] = [];

  constructor(private chamberService: ChamberService) {}

  ngOnInit() {
    this.loadChambres();
  }

  private loadChambres() {
  
    this.chamberService.getChambersByType(TypeChamber.Double).subscribe(
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