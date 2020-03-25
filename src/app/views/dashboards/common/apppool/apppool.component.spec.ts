import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppoolComponent } from './apppool.component';

describe('ApppoolComponent', () => {
  let component: ApppoolComponent;
  let fixture: ComponentFixture<ApppoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApppoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApppoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
