import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginModule } from './login/login.module'
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from 'ngx-webstorage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DataTableModule } from "angular2-datatable";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotificationModule } from './notifications/notification.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServiceModule } from './shared/services/service.module'
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { MyAccountModule } from './my-account/my-account.module';
import { CreditAmountModule } from './credit-amount/credit-amount.module';
import { OfferModule } from './offer/offer.module';
import { RentModule } from './rent/rent.module';


import { routes } from './app.routes';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { RentComponent } from './rent/rent.component';

import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('169804753721395')
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), NgbModule.forRoot(), DatepickerModule.forRoot(), BsDatepickerModule.forRoot(), HttpModule, ServiceModule, SharedModule, Ng2Webstorage, DataTableModule,
    HomeModule, DashboardModule, ComponentsModule, MyAccountModule, CreditAmountModule, OfferModule, RentModule, NotificationModule, SocialLoginModule.initialize(config)
  ],
  providers: [
    ...AUTH_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: AuthServiceConfig, useFactory: provideConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
