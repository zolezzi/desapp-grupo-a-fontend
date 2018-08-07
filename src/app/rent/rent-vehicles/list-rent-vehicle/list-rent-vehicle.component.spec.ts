import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRentVehicleComponent } from './list-rent-vehicle.component';

describe('ListRentVehicleComponent', () => {
  let component: ListRentVehicleComponent;
  let fixture: ComponentFixture<ListRentVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRentVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRentVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
