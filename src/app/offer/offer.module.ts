
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import {ReactiveFormsModule,FormBuilder} from '@angular/forms';
import * as services from '../shared/services/index';
import {OfferComponent} from './offer.component';
import { RegisteredVehiclesComponent } from './registered-vehicles/registered-vehicles.component';


@NgModule({
    imports: [ReactiveFormsModule,CommonModule, SharedModule],
    declarations: [OfferComponent, RegisteredVehiclesComponent],
    exports: [OfferComponent, RegisteredVehiclesComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OfferModule {

  constructor( @Optional() @SkipSelf() parentModule:OfferModule) {
    if (parentModule) {
      throw new Error('OfferModule is already loaded. ');
    }

    console.log('Load OfferModule');
  }

}
