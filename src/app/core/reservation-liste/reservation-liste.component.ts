import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { Reservation } from 'src/app/model/Reservation';
import { ChamberService } from 'src/app/service/chamber.service';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation-liste',
  templateUrl: './reservation-liste.component.html',
  styleUrls: ['./reservation-liste.component.css']
})
export class ReservationListeComponent implements OnInit {
  CurrentUser: any;
  reservations !: Reservation[];
  constructor(private service: ReservationService, 
    private serviceChamber : ChamberService ,
    private storage: StorageService) { }
  ngOnInit(): void {
    if (this.storage.isLoggedIn()) {

      this.CurrentUser = this.storage.getUser();
      console.log(this.CurrentUser);
      this.service.getReservationById(this.CurrentUser.email).subscribe(
        (data) => {
          console.log(data);
          this.reservations = data
          this.reservations.forEach(reservation =>{
            console.log(reservation);
            this.serviceChamber.getChamberByReservationID(reservation.idReservation).subscribe(
              (data =>{
                console.log(data);
                reservation.numeroChamber = data.numerochamber
              })
            )
          })
        }
      )
    }
  }

}
