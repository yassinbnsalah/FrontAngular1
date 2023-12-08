import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/model/Bloc';
import { Foyer } from 'src/app/model/Foyer';
import { Universite } from 'src/app/model/Universite';
import { FoyerService } from 'src/app/service/foyer.service';

@Component({
  selector: 'app-foyer-details',
  templateUrl: './foyer-details.component.html',
  styleUrls: ['./foyer-details.component.css']
})
export class FoyerDetailsComponent {
  foyer !: Foyer ;
  blocs !: Bloc [];
  universites !: Universite[];
  constructor(private foyerService: FoyerService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.GetBloc();
    this.GetUniversite();
    console.log(this.activatedRoute.snapshot.params['id']);
    this.foyerService.getFoyerByID(this.activatedRoute.snapshot.params['id']).subscribe((d) => {
      console.log(d);
      this.foyer = d ;
    })
  }
  GetBloc(){
    this.foyerService.getBLocByFoyer(this.activatedRoute.snapshot.params['id']).subscribe((d)=>{
      console.log(d);
      this.blocs=d;
    })
  }
  GetUniversite(){
    this.foyerService.getUniversiteByFoyer(this.activatedRoute.snapshot.params['id']).subscribe((d)=>{
      console.log(d);
      this.universites=d;
    })
  }
}
