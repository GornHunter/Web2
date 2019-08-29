import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiKorisnikComponent } from './detalji-korisnik.component';

describe('DetaljiKorisnikComponent', () => {
  let component: DetaljiKorisnikComponent;
  let fixture: ComponentFixture<DetaljiKorisnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiKorisnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiKorisnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
