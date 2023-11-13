import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/AuthServices/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  Connected = false; 
  CurrentUser : any; 
  constructor(private storage : StorageService){}
  ngOnInit(): void {
    console.log(this.storage.isLoggedIn());
    
    if(this.storage.isLoggedIn()){
      this.Connected = true
      this.CurrentUser = this.storage.getUser();
      console.log(this.CurrentUser);
      
    }
  }
 
}
