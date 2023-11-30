import {Component, OnInit} from '@angular/core';
import {UniversiteService} from "../../service/universite.service";
import {Universite} from "../../../model/Universite";

@Component({
  selector: 'app-universites-liste',
  templateUrl: './universites-liste.component.html',
  styleUrls: ['./universites-liste.component.css']
})
export class UniversitesListeComponent implements OnInit{

  universites: Universite[] = [];

  constructor(private universiteService: UniversiteService) {}

  ngOnInit(): void {
    this.loadUniversites();
  }

  loadUniversites(): void {
    this.universiteService.findUniversiteAccepte().subscribe(
      (data) => {
        this.universites = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching universities', error);
      }
    );
  }
}

