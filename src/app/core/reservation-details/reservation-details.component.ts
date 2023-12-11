import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamber } from 'src/app/model/Chamber';
import { Reservation } from 'src/app/model/Reservation';
import { User } from 'src/app/model/User';
import { ChamberService } from 'src/app/service/chamber.service';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent {
  constructor(private serviceReservation: ReservationService, private router: Router,
    private activatedRoute: ActivatedRoute, private chamberService: ChamberService) { }
  reservation !: Reservation;
  chamber !: Chamber;
  etudiants !: User[];
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.chamberService.getChamberByReservationID(this.activatedRoute.snapshot.params['id']).subscribe(
      (d) => {
        console.log("chamber of this reservation ");
        console.log(d);
        this.chamber = d;

      }
    )
    this.serviceReservation.getReservationByID(this.activatedRoute.snapshot.params['id']).subscribe(
      (d) => {
        console.log(d);
        this.reservation = d;
        this.etudiants = d.etudiants;
        console.log(this.etudiants);

      }
    )
  }
}
