
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { MapsComponent } from './maps.component';
import { PageMapComponent } from './page-map.component';

import { AgmCoreModule } from '@agm/core';



@NgModule({
    imports: [ReactiveFormsModule,CommonModule, AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDlD2UVVjI-ySv5TJTeyUrZsCTYQjFaBeE',
          libraries: ['places']})
    ],
    declarations: [MapsComponent, PageMapComponent],
    exports: [MapsComponent, AgmCoreModule, PageMapComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapModule {

  constructor( @Optional() @SkipSelf() parentModule:MapModule) {
    if (parentModule) {
      throw new Error('MapModule is already loaded. ');
    }

    console.log('Load MapModule');
  }

}
