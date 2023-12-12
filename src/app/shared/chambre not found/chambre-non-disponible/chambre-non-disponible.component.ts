import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chambre-non-disponible',
  templateUrl: './chambre-non-disponible.component.html',
  styleUrls: ['./chambre-non-disponible.component.css']
})
export class ChambreNonDisponibleComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  GoToChambers() {
    this.router.navigate(['/chambres']);
  }
}
