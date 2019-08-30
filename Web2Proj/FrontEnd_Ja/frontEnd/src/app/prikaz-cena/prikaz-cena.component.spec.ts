import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazCenaComponent } from './prikaz-cena.component';

describe('PrikazCenaComponent', () => {
  let component: PrikazCenaComponent;
  let fixture: ComponentFixture<PrikazCenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazCenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazCenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
