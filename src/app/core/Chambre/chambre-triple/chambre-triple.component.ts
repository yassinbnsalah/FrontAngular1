import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  nomBloc: string = '';
  noChambersMessage: string = '';

  constructor(private chamberService: ChamberService, private route: ActivatedRoute,
    private router : Router ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.nomBloc = params.get('nomBloc') || '';
      this.loadChambres();
    });
  }

  private loadChambres() {
    this.chamberService.getChambersByTypeAndBloc(TypeChamber.Triple, this.nomBloc).subscribe(
      (data) => {
        this.chambres = data;
        this.updateNoChambersMessage();
        if (this.chambres.length === 0) {
          this.router.navigate(['chambre/notfound']);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  private updateNoChambersMessage() {
    this.noChambersMessage =
      this.chambres.length === 0
        ? `Aucune chambre disponible pour le bloc ${this.nomBloc} de type Triple.`
        : '';
  }
}
