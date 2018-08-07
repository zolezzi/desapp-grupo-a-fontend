
import { Route } from '@angular/router';
import { RentComponent } from './rent.component';
import { ClosedRentsComponent } from './closed-rents/closed-rents.component';
import { SearchVehiclesComponent } from './search-vehicles/search-vehicles.component';
import { RentVehicleComponent } from './rent-vehicles/rent-vehicle/rent-vehicle.component';
import { ListRentVehicleComponent } from './rent-vehicles/list-rent-vehicle/list-rent-vehicle.component';


export const RentRoutes: Route[] = [
  {
    path: 'rents',
    component: RentComponent
  },
  {
    path:'rents/closed-rents',
    component:ClosedRentsComponent
  },
  {
    path:'rents/search-vehicles',
    component:SearchVehiclesComponent
  },
  {
    path:'rents/rent-vehicles',
    component:ListRentVehicleComponent
  }

];
