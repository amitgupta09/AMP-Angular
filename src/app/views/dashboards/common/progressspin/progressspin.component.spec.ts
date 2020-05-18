import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressspinComponent } from './progressspin.component';

describe('ProgressspinComponent', () => {
  let component: ProgressspinComponent;
  let fixture: ComponentFixture<ProgressspinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressspinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressspinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
