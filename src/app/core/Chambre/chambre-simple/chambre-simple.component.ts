import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamber } from 'src/app/model/Chamber';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chambre-simple',
  templateUrl: './chambre-simple.component.html',
  styleUrls: ['./chambre-simple.component.css']
})
export class ChambreSimpleComponent implements OnInit {
  chamber: Chamber | undefined;

  constructor(
    private chamberService: ChamberService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Extract chamber ID from the route parameters
    const chamberId = this.route.snapshot.paramMap.get('id');

    if (chamberId) {
      // If chamber ID is available, fetch chamber details
      this.getChamberDetails(chamberId);
    } else {
      // Handle the case when there's no chamber ID (optional)
      console.error('No chamber ID provided');
    }
  }

  getChamberDetails(id: any) {
    this.chamberService.getChamberByID(id).subscribe(
      (data: Chamber) => {
        this.chamber = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching chamber data: ', error);
      }
    );
  }

  GoToChamberDetails(id: any) {
    this.router.navigate(['chamber/', id]);
  }
}
