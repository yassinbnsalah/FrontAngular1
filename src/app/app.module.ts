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
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { NavbarDashboardComponent } from './shared/navbar-dashboard/navbar-dashboard.component';
import { ReservationListeComponent } from './core/reservation-liste/reservation-liste.component';
import { ReservationDetailsComponent } from './core/reservation-details/reservation-details.component';
import { ChambresComponent } from './core/Chambres/chambres/chambres.component';
import { ChambreSimpleComponent } from './core/Chambre/chambre-simple/chambre-simple.component';
import { ChambreDoubleComponent } from './core/Chambre/chambre-double/chambre-double.component';
import { ChambreTripleComponent } from './core/Chambre/chambre-triple/chambre-triple.component';
import { ChambreNonDisponibleComponent } from './shared/chambre not found/chambre-non-disponible/chambre-non-disponible.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    AboutPageComponent,
    UniversitesListeComponent,
    FoyerListeComponent,
    AddUniversiteComponent,
    LoginPageComponent,
    NavbarDashboardComponent,
    ReservationListeComponent,
    ReservationDetailsComponent,
    ChambresComponent,
    ChambreSimpleComponent,
    ChambreDoubleComponent,
    ChambreTripleComponent,
    ChambreNonDisponibleComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
