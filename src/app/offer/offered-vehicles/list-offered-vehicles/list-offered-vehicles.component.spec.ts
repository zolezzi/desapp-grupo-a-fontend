import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfferedVehiclesComponent } from './list-offered-vehicles.component';

describe('ListOfferedVehiclesComponent', () => {
  let component: ListOfferedVehiclesComponent;
  let fixture: ComponentFixture<ListOfferedVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfferedVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfferedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
