import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomePageComponent } from './core/home-page/home-page.component';
import { AboutPageComponent } from './core/about-page/about-page.component';
import { UniversitesListeComponent } from './core/universites-liste/universites-liste.component';
import { FoyerListeComponent } from './core/foyer-liste/foyer-liste.component';
import { AddUniversiteComponent } from './core/add-universite/add-universite.component';
import {UniversiteDetailsComponent} from "./core/universite-details/universite-details.component";

const routes: Routes = [
  {path:"home" , component : HomePageComponent},
  {path:"about" , component:AboutPageComponent},
  {path:"universites" , component:UniversitesListeComponent},
  {path:"universite/add" , component:AddUniversiteComponent},
  {path:"foyer" , component:FoyerListeComponent},
  {path:"universiteDetail/:id", component:UniversiteDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
