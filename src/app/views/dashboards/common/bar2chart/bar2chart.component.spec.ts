import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bar2chartComponent } from './bar2chart.component';

describe('Bar2chartComponent', () => {
  let component: Bar2chartComponent;
  let fixture: ComponentFixture<Bar2chartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bar2chartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bar2chartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
