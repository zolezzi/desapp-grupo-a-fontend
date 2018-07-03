
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import {ReactiveFormsModule,FormBuilder} from '@angular/forms';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {OfferComponent} from './offer.component';
import { RegisteredVehiclesComponent } from './registered-vehicles/create-registered-vehicles/registered-vehicles.component';
import { ListRegisteredVehiclesComponent } from './registered-vehicles/list-registered-vehicles/list-registered-vehicles.component';
import { ListOfferedVehiclesComponent } from './offered-vehicles/list-offered-vehicles/list-offered-vehicles.component';
import { ListClosedOperationsComponent } from './closed-operations/list-closed-operations/list-closed-operations.component';
import { ListRentedVehiclesComponent } from './rented-vehicles/list-rented-vehicles/list-rented-vehicles.component';
import { CreateOfferVehicleComponent } from './offered-vehicles/create-offer-vehicle/create-offer-vehicle.component';


@NgModule({
    imports: [ ReactiveFormsModule, CommonModule, NgbModule, DatepickerModule, BsDatepickerModule, SharedModule],
    declarations: [OfferComponent, RegisteredVehiclesComponent, ListRegisteredVehiclesComponent, ListOfferedVehiclesComponent, ListClosedOperationsComponent, ListRentedVehiclesComponent, CreateOfferVehicleComponent],
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
