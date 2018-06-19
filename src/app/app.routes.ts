import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.route';
import { HomeRoutes } from './home/home.route';
import { DashboardRoutes } from './dashboard/dashboard.route';
import { MyAccountRoutes } from './my-account/my-account.route';
import { CreditAmountRoutes } from './credit-amount/credit-amount.route';
import { OfferRoutes } from './offer/offer.route';


export const routes: Routes = [
  ...LoginRoutes,
  ...HomeRoutes,
  ...DashboardRoutes,
  ...MyAccountRoutes,
  ...CreditAmountRoutes,
  ...OfferRoutes

];
