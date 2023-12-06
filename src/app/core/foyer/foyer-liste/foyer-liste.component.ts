import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/model/Foyer';
import { FoyerService } from 'src/app/service/foyer.service';

@Component({
  selector: 'app-foyer-liste',
  templateUrl: './foyer-liste.component.html',
  styleUrls: ['./foyer-liste.component.css']
})
export class FoyerListeComponent implements OnInit {
  foyers: Foyer[] = [];
  paginatedData: Foyer[] = [];
  totalItems: number = 0;
  pageSize!: number ; // Initial page size
  currentPage: number = 1;
  search: string = '';
  pageSizeOptions: number[] = [2, 5, 20]; // Page size options

  constructor(private foyerService: FoyerService,
    private activatedRoute : ActivatedRoute  ,
    private router:Router) {}

  ngOnInit(): void {
    this.loadData();
    this.setInitialPageSize(); // Appeler la fonction pour définir la taille de page initiale
  }

  loadData() {
    this.foyerService.getAllFoyer().subscribe((data: Foyer[]) => {
      this.foyers = data;
      this.totalItems = this.foyers.length;
      this.filterData();
    });
  }

  filterData() {
    const filtered = this.foyers.filter(item =>
      item.nomFoyer.toLowerCase().includes(this.search.toLowerCase())
    );
    this.totalItems = filtered.length;
  
    // Mettre à jour la pagination en fonction de la taille de la page et de la page actuelle
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.totalItems);
    this.paginatedData = filtered.slice(startIndex, endIndex);
  }
  GoToFoyerDetail(id:any){
 
    this.router.navigate(['foyer/'+id])
    
  }

  getPageData(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.filterData();
  }

  onSearch() {
    this.currentPage = 1; // Reset to the first page when a new search is performed
    this.filterData();
  }

  // Fonction pour définir la taille de page initiale
  setInitialPageSize() {
    if (this.pageSizeOptions && this.pageSizeOptions.length > 0) {
      this.pageSize = this.pageSizeOptions[0];
      this.filterData();
    }
  }
  
}
