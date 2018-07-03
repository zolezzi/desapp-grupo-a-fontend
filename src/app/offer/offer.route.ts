
import { Route } from '@angular/router';
import { OfferComponent } from './offer.component';
import { RegisteredVehiclesComponent } from './registered-vehicles/create-registered-vehicles/registered-vehicles.component';
import { ListRegisteredVehiclesComponent } from './registered-vehicles/list-registered-vehicles/list-registered-vehicles.component';
import { ListOfferedVehiclesComponent } from './offered-vehicles/list-offered-vehicles/list-offered-vehicles.component';
import { ListClosedOperationsComponent } from './closed-operations/list-closed-operations/list-closed-operations.component';
import { ListRentedVehiclesComponent } from './rented-vehicles/list-rented-vehicles/list-rented-vehicles.component';
import { CreateOfferVehicleComponent } from './offered-vehicles/create-offer-vehicle/create-offer-vehicle.component';


export const OfferRoutes: Route[] = [
  {
    path: 'offers',
    component: OfferComponent
  },
  {
    path: 'offers/registered-vehicles',
    component: ListRegisteredVehiclesComponent
  },
  {
    path:'offers/create/register-vehicle',
    component:RegisteredVehiclesComponent
  },
  {
    path:'offers/offered-vehicles',
    component:ListOfferedVehiclesComponent
  },
  {
    path: 'offers/closed-operations',
    component:ListClosedOperationsComponent
  },
  {
    path: 'offers/rented-vehicles',
    component:ListRentedVehiclesComponent
  },
  {
    path:'offers/register-vehicle',
    component:CreateOfferVehicleComponent
  }

];
