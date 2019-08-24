import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazLinijaComponent } from './prikaz-linija.component';

describe('PrikazLinijaComponent', () => {
  let component: PrikazLinijaComponent;
  let fixture: ComponentFixture<PrikazLinijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazLinijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazLinijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
