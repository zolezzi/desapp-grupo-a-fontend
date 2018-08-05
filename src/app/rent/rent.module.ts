
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RentComponent } from './rent.component';

import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ReactiveFormsModule,FormBuilder} from '@angular/forms';
import { ClosedRentsComponent } from './closed-rents/closed-rents.component';
import { SearchVehiclesComponent } from './search-vehicles/search-vehicles.component';


@NgModule({
    imports: [ReactiveFormsModule,CommonModule, SharedModule, DatepickerModule, BsDatepickerModule, NgbModule ],
    declarations: [RentComponent, ClosedRentsComponent, SearchVehiclesComponent],
    exports: [RentComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RentModule {

  constructor( @Optional() @SkipSelf() parentModule:RentModule) {
    if (parentModule) {
      throw new Error('RentModule is already loaded. ');
    }

    console.log('Load RentModule');
  }

}
