import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './core/home-page/home-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutPageComponent } from './core/about-page/about-page.component';
import { UniversitesListeComponent } from './core/universites-liste/universites-liste.component';
import { FoyerListeComponent } from './core/foyer-liste/foyer-liste.component';
import { AddUniversiteComponent } from './core/add-universite/add-universite.component';
import { ChambresComponent } from './core/Chambres/chambres/chambres.component';
import { ChambreSimpleComponent } from './core/Chambre/chambre-simple/chambre-simple.component';
import { ChambreDoubleComponent } from './core/Chambre/chambre-double/chambre-double.component';
import { ChambreTripleComponent } from './core/Chambre/chambre-triple/chambre-triple.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    AboutPageComponent,
    UniversitesListeComponent,
    FoyerListeComponent,
    AddUniversiteComponent,
    ChambresComponent,
    ChambreSimpleComponent,
    ChambreDoubleComponent,
    ChambreTripleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
