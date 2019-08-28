import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogovanjeCompComponent } from './logovanje-comp.component';

describe('LogovanjeCompComponent', () => {
  let component: LogovanjeCompComponent;
  let fixture: ComponentFixture<LogovanjeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogovanjeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogovanjeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
