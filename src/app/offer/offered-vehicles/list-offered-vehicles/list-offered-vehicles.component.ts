import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserResourceApiService } from '../../../shared/services/user-resource-api.service';
import { VehicleResourceApiService } from '../../../shared/services/vehicle-resource-api.service';
import { VehicleFilter } from '../../../model/models';

@Component({
  selector: 'app-list-offered-vehicles',
  templateUrl: './list-offered-vehicles.component.html',
  styleUrls: ['./list-offered-vehicles.component.scss']
})
export class ListOfferedVehiclesComponent implements OnInit {

  router:any;

  constructor(protected route: ActivatedRoute, router:Router, protected userResourceApiService:UserResourceApiService,
    protected vehicleResourceApiService:VehicleResourceApiService) {

    this.router = router;
  }

  ngOnInit() {
  }

  offerVehicle(){
    this.router.navigate(["offers/register-vehicle"]);
  }

}
