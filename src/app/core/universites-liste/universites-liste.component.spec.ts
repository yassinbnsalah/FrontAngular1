import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitesListeComponent } from './universites-liste.component';

describe('UniversitesListeComponent', () => {
  let component: UniversitesListeComponent;
  let fixture: ComponentFixture<UniversitesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitesListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
