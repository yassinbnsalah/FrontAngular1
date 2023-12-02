import { Component, OnInit } from '@angular/core';
import { UniversiteService } from '../../service/universite.service';
import { Universite } from 'src/app/model/Universite';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { AuthService } from 'src/app/AuthServices/auth.service';
import { User } from 'src/app/model/User';
import { DemandeService } from 'src/app/service/demande.service';
import { Demande } from 'src/app/model/Demande';
import { EmailValidator, cinValidator } from '../CinValidator';

@Component({
  selector: 'app-create-demande',
  templateUrl: './create-demande.component.html',
  styleUrls: ['./create-demande.component.css']
})
export class CreateDemandeComponent implements OnInit {
  universites !: Universite[];
  demanadeAdded !: Demande ; 
  disabledAttr : boolean = false ; 
  demande = new FormGroup({
    name : new FormControl('', Validators.required),
    prename : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required,EmailValidator()]),
    cin : new FormControl('', [Validators.required,cinValidator()]),
    ecole : new FormControl('' , Validators.required),
    typeChamber : new FormControl('' , Validators.required),
    anneeUniversitaire : new FormControl('', Validators.required),
    autoRenewed : new FormControl('' ,Validators.required)
  })

  constructor(private universiteService : UniversiteService , 
    private storage : StorageService, 
    private demandeService:DemandeService,
    private userService : AuthService){}
  ngOnInit(): void {
    this.getUniversitesListe(); 
    if(this.storage.isLoggedIn()){
      this.getUserByEmail();
     
    }


     
  }
  isEmail(email: string): boolean {
   
    
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  getUserByEmail(){
    this.userService.getUserByEmail(this.storage.getUser().email).subscribe((data)=>{
        console.log(data);
        this.disabledAttr = true; 
        this.demande.controls.email.disable
        this.demande.get("email")!.setValue(data.email) 
      this.demande.get("name")!.setValue(data.nomEt) 
      this.demande.get("prename")!.setValue(data.prenomEt) 
      this.demande.get("cin")!.setValue(data.cin.toString()) 
    })
  }
  
  getUniversitesListe(){
    this.universiteService.findUniversiteAccepte().subscribe((data) =>{
      console.log(data);
      this.universites = data ; 
    })
  }
  validMail :Boolean = true ;
  saveDemande(){ 
   
    const demande: Demande = this.demande.value as unknown as Demande;
    console.log(demande);
    if(!this.isEmail(demande.email)){
      console.log("email invalide");
      this.validMail = false
    }else{
      this.validMail = true
    }
   /* this.demandeService.createDemande(demande).subscribe((data)=>{
      console.log(data);
      
    })*/
    
  }


}
