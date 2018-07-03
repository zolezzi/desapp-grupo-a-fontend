import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegisteredVehiclesComponent } from './list-registered-vehicles.component';

describe('ListRegisteredVehiclesComponent', () => {
  let component: ListRegisteredVehiclesComponent;
  let fixture: ComponentFixture<ListRegisteredVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRegisteredVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegisteredVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
