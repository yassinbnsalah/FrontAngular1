import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteDetailsComponent } from './universite-details.component';

describe('UniversiteDetailsComponent', () => {
  let component: UniversiteDetailsComponent;
  let fixture: ComponentFixture<UniversiteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
