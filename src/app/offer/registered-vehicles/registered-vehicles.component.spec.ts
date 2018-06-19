import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredVehiclesComponent } from './registered-vehicles.component';

describe('RegisteredVehiclesComponent', () => {
  let component: RegisteredVehiclesComponent;
  let fixture: ComponentFixture<RegisteredVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
