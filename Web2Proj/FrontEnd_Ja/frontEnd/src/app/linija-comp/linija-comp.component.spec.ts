import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinijaCompComponent } from './linija-comp.component';

describe('LinijaCompComponent', () => {
  let component: LinijaCompComponent;
  let fixture: ComponentFixture<LinijaCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinijaCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinijaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
