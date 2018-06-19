
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule,FormBuilder } from '@angular/forms';
// import { ComponentsModule } from '../components/components.module';
import { CreditAmountComponent } from './credit-amount.component';


@NgModule({
    imports: [ReactiveFormsModule,CommonModule, SharedModule],
    declarations: [CreditAmountComponent],
    exports: [CreditAmountComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreditAmountModule {

  constructor( @Optional() @SkipSelf() parentModule:CreditAmountModule) {
    if (parentModule) {
      throw new Error('CreditAmountModule is already loaded. ');
    }

    console.log('Load CreditAmountModule');
  }

}
