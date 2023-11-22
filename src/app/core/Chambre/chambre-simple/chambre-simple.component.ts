import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private chamberService: ChamberService) {}

  ngOnInit() {
    this.loadChambres();
  }

  private loadChambres() {
  
    this.chamberService.getChambersByType(TypeChamber.Simple).subscribe(
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