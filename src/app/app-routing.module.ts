import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomePageComponent } from './core/home-page/home-page.component';
import { AboutPageComponent } from './core/about-page/about-page.component';
import { UniversitesListeComponent } from './core/universite/universites-liste/universites-liste.component';
import { FoyerListeComponent } from './core/foyer/foyer-liste/foyer-liste.component';
import { AddUniversiteComponent } from './core/universite/add-universite/add-universite.component';
import { LoginPageComponent } from './core/auth/login-page/login-page.component';
import { ReservationListeComponent } from './core/reservation/reservation-liste/reservation-liste.component';
import { ReservationDetailsComponent } from './core/reservation/reservation-details/reservation-details.component';
import {UniversiteDetailsComponent} from "./core/universite/universite-details/universite-details.component";
import { NotFoundComponent } from './core/auth/not-found/not-found.component';
import { DemandeListeComponent } from './core/demande/demande-liste/demande-liste.component';
import { ChambresComponent } from './core/Chambre/chambres/chambres.component';
import { ChambreSimpleComponent } from './core/Chambre/chambre-simple/chambre-simple.component';
import { ChambreDoubleComponent } from './core/Chambre/chambre-double/chambre-double.component';
import { ChambreTripleComponent } from './core/Chambre/chambre-triple/chambre-triple.component';
import {MapComponent} from "./core/map/map.component";
import {StepComponent} from "./core/step/step.component";
import { FoyerDetailsComponent } from './core/foyer/foyer-details/foyer-details.component';

const routes: Routes = [
  {path:"home" , component : HomePageComponent},
  {path:"about" , component:AboutPageComponent},
  {path:"universites" , component:UniversitesListeComponent},
  {path:"universite/add" , component:AddUniversiteComponent},
  {path:"reservation/liste" , component:ReservationListeComponent},
  {path:"reservation/:id" , component:ReservationDetailsComponent},
  {path:"foyer" , component:FoyerListeComponent},
  {path:"foyer/:id" , component:FoyerDetailsComponent},
  {path:"login" , component:LoginPageComponent},
  {path:"demande/liste" , component: DemandeListeComponent},
  {path:"universiteDetail/:id", component:UniversiteDetailsComponent},
 
  {path:"chambres" , component:ChambresComponent},
  {path:"chambre-simple" , component:ChambreSimpleComponent},
  {path:"chambre-double" , component:ChambreDoubleComponent},
  {path:"chambre-triple" , component:ChambreTripleComponent},

  {path:"step" , component:StepComponent},
  {path:"map" , component:MapComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
