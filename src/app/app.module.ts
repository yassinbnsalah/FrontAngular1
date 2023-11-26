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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { UniversiteDetailsComponent } from './core/universite-details/universite-details.component';
import {GoogleMapsModule} from "@angular/google-maps";
import { MapComponent } from './core/map/map.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    AboutPageComponent,
    UniversitesListeComponent,
    FoyerListeComponent,
    AddUniversiteComponent,
    UniversiteDetailsComponent,
    MapComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
