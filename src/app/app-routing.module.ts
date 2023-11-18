import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomePageComponent } from './core/home-page/home-page.component';
import { AboutPageComponent } from './core/about-page/about-page.component';
import { UniversitesListeComponent } from './core/universites-liste/universites-liste.component';
import { FoyerListeComponent } from './core/foyer-liste/foyer-liste.component';
import { AddUniversiteComponent } from './core/add-universite/add-universite.component';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { ReservationListeComponent } from './core/reservation-liste/reservation-liste.component';
import { ReservationDetailsComponent } from './core/reservation-details/reservation-details.component';
import { ChambresComponent } from './core/Chambres/chambres/chambres.component';
import { ChambreSimpleComponent } from './core/Chambre/chambre-simple/chambre-simple.component';
import { ChambreDoubleComponent } from './core/Chambre/chambre-double/chambre-double.component';
import { ChambreTripleComponent } from './core/Chambre/chambre-triple/chambre-triple.component';

const routes: Routes = [
  {path:"home" , component : HomePageComponent},
  {path:"about" , component:AboutPageComponent},
  {path:"universites" , component:UniversitesListeComponent},
  {path:"universite/add" , component:AddUniversiteComponent},
  {path:"reservation/liste" , component:ReservationListeComponent},
  {path:"reservation/:id" , component:ReservationDetailsComponent},
  {path:"foyer" , component:FoyerListeComponent},
  {path:"login" , component:LoginPageComponent} ,
  {path:"chambres" , component:ChambresComponent},
  {path:"chambre-simple" , component:ChambreSimpleComponent},
  {path:"chambre-double" , component:ChambreDoubleComponent},
  {path:"chambre-triple" , component:ChambreTripleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
