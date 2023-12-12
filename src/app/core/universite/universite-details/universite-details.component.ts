import { Component, OnInit } from '@angular/core';
import { UniversiteService } from "../../service/universite.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Universite} from "../../../model/Universite";
@Component({
  selector: 'app-universite-details',
  templateUrl: './universite-details.component.html',
  styleUrls: ['./universite-details.component.css']
})
export class UniversiteDetailsComponent implements OnInit {
  selectedUniversite: any;
  id: number = 0; // Initialize to a default value

  constructor(private universiteService: UniversiteService, private route: ActivatedRoute, private router:Router) {}
  GoToFoyerDetails(id:any){
    this.router.navigate(['foyer/'+id])
  }
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

  GoToFoyerDetail(id:any){
      this.router.navigate(["foyer/", id])
    }

}
