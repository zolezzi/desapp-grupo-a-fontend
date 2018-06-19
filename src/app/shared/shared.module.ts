import { NgModule, ModuleWithProviders, Optional,SkipSelf } from '@angular/core';
// import {HttpModule, HttpClient} from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ServiceModule} from './services/service.module';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';



/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
 export function HttpLoaderFactory(http: HttpClient) {
     return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
 }


@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })],
  exports: [CommonModule, FormsModule, RouterModule, TranslateModule]
})
export class SharedModule {

  constructor( @Optional() @SkipSelf() parentModule:   SharedModule) {
    if (parentModule) {
      throw new Error('SharedModule is already loaded. ');
    }

    console.log('Load  SharedModule');
  }

}