import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreDoubleComponent } from './chambre-double.component';

describe('ChambreDoubleComponent', () => {
  let component: ChambreDoubleComponent;
  let fixture: ComponentFixture<ChambreDoubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreDoubleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
