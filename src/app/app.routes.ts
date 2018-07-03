import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.route';
import { HomeRoutes } from './home/home.route';
import { DashboardRoutes } from './dashboard/dashboard.route';
import { MyAccountRoutes } from './my-account/my-account.route';
import { CreditAmountRoutes } from './credit-amount/credit-amount.route';
import { OfferRoutes } from './offer/offer.route';
import { RentRoutes } from './rent/rent.route';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotificationRoutes } from './notifications/notification.route';
import { MapsRoutes } from './maps/map.route';


export const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  ...HomeRoutes,
  ...LoginRoutes,
  ...DashboardRoutes,
  ...MyAccountRoutes,
  ...CreditAmountRoutes,
  ...OfferRoutes,
  ...RentRoutes,
  ...NotificationRoutes,
  ...MapsRoutes

];
