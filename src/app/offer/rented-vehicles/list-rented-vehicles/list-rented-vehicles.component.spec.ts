import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRentedVehiclesComponent } from './list-rented-vehicles.component';

describe('ListRentedVehiclesComponent', () => {
  let component: ListRentedVehiclesComponent;
  let fixture: ComponentFixture<ListRentedVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRentedVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRentedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
