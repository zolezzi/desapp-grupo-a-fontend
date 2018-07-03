
import { Route } from '@angular/router';
import { RentComponent } from './rent.component';
import { ClosedRentsComponent } from './closed-rents/closed-rents.component';
import { SearchVehiclesComponent } from './search-vehicles/search-vehicles.component';


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
  }
  // ,
  // {
  //   path:'rents/rent-vehicles',
  //   component:
  // }

];
