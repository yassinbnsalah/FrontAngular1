import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreTripleComponent } from './chambre-triple.component';

describe('ChambreTripleComponent', () => {
  let component: ChambreTripleComponent;
  let fixture: ComponentFixture<ChambreTripleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreTripleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreTripleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
