import { NgModule, ModuleWithProviders, ErrorHandler,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AUTH_PROVIDERS, AuthHttp } from 'angular2-jwt';
import { UserResourceApiService } from './user-resource-api.service';

import * as services from './index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [services.UserService, UserResourceApiService]
})
export class ServiceModule {

  constructor( @Optional() @SkipSelf() parentModule: ServiceModule) {
    if (parentModule) {
      throw new Error('ServiceModuleModule is already loaded. ');
    }

    console.log('Load  ServiceModule');
  }

}
