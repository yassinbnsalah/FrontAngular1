import { Component, OnInit } from '@angular/core';
import { UniversiteService } from "../add-universite/service/universite.service";
import { ActivatedRoute } from "@angular/router";
import {Universite} from "../../model/Universite";
@Component({
  selector: 'app-universite-details',
  templateUrl: './universite-details.component.html',
  styleUrls: ['./universite-details.component.css']
})
export class UniversiteDetailsComponent implements OnInit {
  selectedUniversite: any;
  id: number = 0; // Initialize to a default value

  constructor(private universiteService: UniversiteService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Convert to number using the '+' prefix

      this.universiteService.getUniversiteById(this.id).subscribe(
        (data: Universite) => {
          console.log(data);
          this.selectedUniversite = data;
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
    });
  }
}