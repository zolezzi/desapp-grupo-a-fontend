import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedRentsComponent } from './closed-rents.component';

describe('ClosedRentsComponent', () => {
  let component: ClosedRentsComponent;
  let fixture: ComponentFixture<ClosedRentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedRentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedRentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
