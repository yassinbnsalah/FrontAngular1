import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/AuthServices/storage.service';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDashboardComponent {
  Connected = false; 
  CurrentUser : any; 
  constructor(private storage : StorageService,
    private router : Router){}
  ngOnInit(): void {
    console.log(this.storage.isLoggedIn());
    
    if(this.storage.isLoggedIn()){
      this.Connected = true
      this.CurrentUser = this.storage.getUser();
      console.log(this.CurrentUser);
      
    }else{
      this.router.navigate(['/home'])
    }
  }
}
