import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajStavkaComponent } from './dodaj-stavka.component';

describe('DodajStavkaComponent', () => {
  let component: DodajStavkaComponent;
  let fixture: ComponentFixture<DodajStavkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajStavkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajStavkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
