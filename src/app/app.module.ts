import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginModule } from './login/login.module'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServiceModule } from './shared/services/service.module'
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { MyAccountModule } from './my-account/my-account.module';
import { CreditAmountModule } from './credit-amount/credit-amount.module';
import { OfferModule } from './offer/offer.module';

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
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }
]);


@NgModule({
  declarations: [
    AppComponent,
    RentComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpModule, LoginModule, ServiceModule,SharedModule,
    HomeModule, DashboardModule, ComponentsModule, MyAccountModule, CreditAmountModule, OfferModule, SocialLoginModule.initialize(config)
  ],
  providers: [
    ...AUTH_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
