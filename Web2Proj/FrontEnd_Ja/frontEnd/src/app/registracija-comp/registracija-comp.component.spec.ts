import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistracijaCompComponent } from './registracija-comp.component';

describe('RegistracijaCompComponent', () => {
  let component: RegistracijaCompComponent;
  let fixture: ComponentFixture<RegistracijaCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistracijaCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistracijaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
