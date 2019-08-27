import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazPolazakaComponent } from './prikaz-polazaka.component';

describe('PrikazPolazakaComponent', () => {
  let component: PrikazPolazakaComponent;
  let fixture: ComponentFixture<PrikazPolazakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazPolazakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazPolazakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
