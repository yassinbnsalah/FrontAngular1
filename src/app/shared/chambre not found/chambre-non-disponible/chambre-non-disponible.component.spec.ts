import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreNonDisponibleComponent } from './chambre-non-disponible.component';

describe('ChambreNonDisponibleComponent', () => {
  let component: ChambreNonDisponibleComponent;
  let fixture: ComponentFixture<ChambreNonDisponibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreNonDisponibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreNonDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
