import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOfferVehicleComponent } from './create-offer-vehicle.component';

describe('CreateOfferVehicleComponent', () => {
  let component: CreateOfferVehicleComponent;
  let fixture: ComponentFixture<CreateOfferVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOfferVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOfferVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
