import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreSimpleComponent } from './chambre-simple.component';

describe('ChambreSimpleComponent', () => {
  let component: ChambreSimpleComponent;
  let fixture: ComponentFixture<ChambreSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
