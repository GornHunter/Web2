import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolazakCompComponent } from './polazak-comp.component';

describe('PolazakCompComponent', () => {
  let component: PolazakCompComponent;
  let fixture: ComponentFixture<PolazakCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolazakCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolazakCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
