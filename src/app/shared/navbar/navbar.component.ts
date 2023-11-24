import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/AuthServices/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  Connected = false; 
  CurrentUser : any; 
  home=true ;
  aboutus = false ; 
  universite = false ;
  foyer = false ; 
  newUni = false; 
  constructor(private storage : StorageService,private router: Router){
    this.urlActive();
  }
  ngOnInit(): void {
    console.log(this.storage.isLoggedIn());
    
    if(this.storage.isLoggedIn()){
      this.Connected = true
      this.CurrentUser = this.storage.getUser();
      console.log(this.CurrentUser);
      
    }
  }

  urlActive(){
    console.log("hey here ", this.router.url);
  }
 
}
