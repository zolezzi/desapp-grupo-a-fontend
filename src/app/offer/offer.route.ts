
import { Route } from '@angular/router';
import { OfferComponent } from './offer.component';
import { RegisteredVehiclesComponent } from './registered-vehicles/registered-vehicles.component';

export const OfferRoutes: Route[] = [
  {
    path: 'offers',
    component: OfferComponent
  },
  {
    path: 'offers/registered-vehicles',
    component: RegisteredVehiclesComponent
  }
];
