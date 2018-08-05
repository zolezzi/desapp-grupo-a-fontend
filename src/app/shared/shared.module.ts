import { NgModule, ModuleWithProviders, Optional,SkipSelf } from '@angular/core';
// import {HttpModule, HttpClient} from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataTableModule } from "angular2-datatable";

import { MapModule } from '../maps/map.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ServiceModule} from './services/service.module';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';



/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
 export function HttpLoaderFactory(httpClient: HttpClient) {
     return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
 }


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, MapModule, DataTableModule, TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })],
  exports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule, TranslateModule, MapModule, DataTableModule]
})
export class SharedModule {

  constructor( @Optional() @SkipSelf() parentModule:   SharedModule) {
    if (parentModule) {
      throw new Error('SharedModule is already loaded. ');
    }

    console.log('Load  SharedModule');
  }

}
