import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { Demande } from 'src/app/model/Demande';
import { DemandeService } from 'src/app/service/demande.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements
  Resolve<Observable<{
    demandes: Demande[]
  }>> {
  constructor(private storage: StorageService, private demandeservice: DemandeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<{ demandes: Demande[] }> {
    let demandes = this.demandeservice.getDemande(this.storage.getUser().email);
    return forkJoin({
      demandes: demandes
    })
  }
}
