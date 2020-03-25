import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pie2chartComponent } from './pie2chart.component';

describe('Pie2chartComponent', () => {
  let component: Pie2chartComponent;
  let fixture: ComponentFixture<Pie2chartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pie2chartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pie2chartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
