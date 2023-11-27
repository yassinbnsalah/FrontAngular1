import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { Demande } from 'src/app/model/Demande';
import { User } from 'src/app/model/User';
import { DemandeService } from 'src/app/service/demande.service';

@Component({
  selector: 'app-demande-liste',
  templateUrl: './demande-liste.component.html',
  styleUrls: ['./demande-liste.component.css']
})
export class DemandeListeComponent implements OnInit{
  currentUser !: User ;
  demandes !: Demande[] ; 
  constructor(private demandeService : DemandeService,
    private storage :StorageService){}

  ngOnInit(): void {
    console.log("here we go");
    this.currentUser = this.storage.getUser(); 
    this.getDemandeList();
  }

  getDemandeList(){
  
    console.log(this.currentUser.email);
    
    this.demandeService.getDemande(this.currentUser.email).subscribe((data)=>{
      console.log(data);
      this.demandes = data ;
      
    })
  }
}
