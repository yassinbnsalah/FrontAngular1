import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './core/home-page/home-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutPageComponent } from './core/about-page/about-page.component';
import { UniversitesListeComponent } from './core/universite/universites-liste/universites-liste.component';
import { FoyerListeComponent } from './core/foyer/foyer-liste/foyer-liste.component';
import { AddUniversiteComponent } from './core/universite/add-universite/add-universite.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './core/auth/login-page/login-page.component';
import { NavbarDashboardComponent } from './shared/navbar-dashboard/navbar-dashboard.component';
import { ReservationListeComponent } from './core/reservation/reservation-liste/reservation-liste.component';
import { ReservationDetailsComponent } from './core/reservation/reservation-details/reservation-details.component';
import { UniversiteDetailsComponent } from './core/universite/universite-details/universite-details.component';
import { NotFoundComponent } from './core/auth/not-found/not-found.component';
import { CreateDemandeComponent } from './core/demande/create-demande/create-demande.component';
import { DemandeListeComponent } from './core/demande/demande-liste/demande-liste.component';
import { ChambresComponent } from './core/Chambre/chambres/chambres.component';
import { ChambreSimpleComponent } from './core/Chambre/chambre-simple/chambre-simple.component';
import { ChambreDoubleComponent } from './core/Chambre/chambre-double/chambre-double.component';
import { ChambreTripleComponent } from './core/Chambre/chambre-triple/chambre-triple.component';
import { MapComponent } from './core/map/map.component';
import { ErrormsgComponent } from './shared/errormsg/errormsg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListeAgentComponent } from './core/universite/liste-agent/liste-agent/liste-agent.component';
import { StepComponent } from './core/step/step.component';
import {MatInputModule} from "@angular/material/input";
import {MatStepperModule} from "@angular/material/stepper";
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

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
    UniversiteDetailsComponent,
    NotFoundComponent,
    CreateDemandeComponent,
    DemandeListeComponent,
    ChambresComponent,
    ChambreSimpleComponent,
    ChambreDoubleComponent,
    ChambreTripleComponent,
    MapComponent,
    ErrormsgComponent,
    ListeAgentComponent,
    StepComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],

  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
