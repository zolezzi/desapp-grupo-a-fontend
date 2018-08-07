import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserResourceApiService } from '../../../shared/services/user-resource-api.service';
import { RentResourceApiService } from '../../../shared/services/rent-resource-api.service';
import { VehicleResourceApiService } from '../../../shared/services/vehicle-resource-api.service';
import { PublicationResourceApiService } from '../../../shared/services/publication-resource-api.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-rent-vehicle',
  templateUrl: './rent-vehicle.component.html',
  styleUrls: ['./rent-vehicle.component.scss']
})
export class RentVehicleComponent implements OnInit {

  router:any;
  publication: any = {};
  userCurrent:any = {};

  constructor(protected route: ActivatedRoute, router:Router, protected userResourceApiService:UserResourceApiService,
    protected vehicleResourceApiService:VehicleResourceApiService, protected publicationResourceApiService:PublicationResourceApiService,
    protected localStorageService:LocalStorageService, protected rentResourceApiService:RentResourceApiService) {

      this.router = router;
  }

  ngOnInit() {

    this.userCurrent = this.localStorageService.retrieve('userCurrent');

    this.rentResourceApiService.findAllRents(this.userCurrent.id).subscribe(result => {
      console.log("REUSLT", result);
    });
  }

}
