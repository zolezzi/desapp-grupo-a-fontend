import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserResourceApiService } from '../../../shared/services/user-resource-api.service';
import { VehicleResourceApiService } from '../../../shared/services/vehicle-resource-api.service';
import { VehicleFilter } from '../../../model/models';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-list-registered-vehicles',
  templateUrl: './list-registered-vehicles.component.html',
  styleUrls: ['./list-registered-vehicles.component.scss']
})
export class ListRegisteredVehiclesComponent implements OnInit {

  vehicles:Array<any> = [];
  userSocial:any;
  filter: VehicleFilter;
  userCurrent:any = {};
  router:any;

  constructor( protected route: ActivatedRoute, router:Router, protected userResourceApiService:UserResourceApiService,
    protected vehicleResourceApiService:VehicleResourceApiService, protected localStorageService:LocalStorageService) {

    this.router = router;
  }

  ngOnInit() {

    this.filter = this.createFilter();

    this.userSocial = this.localStorageService.retrieve('userSocial');
    console.log(this.userSocial);
    this.userCurrent = this.localStorageService.retrieve('userCurrent');
    console.log(this.userCurrent);

    this.vehicleResourceApiService.allMyVehiclesRegitered(this.userCurrent.id).subscribe(result => {
      this.vehicles = result.vehiclesDtos;
    });

  }

  createFilter(): VehicleFilter {

    return <VehicleFilter>{
      type:null,
      state:"",
      userId:null,
      pantent: "",
      number: null
    };

  }

  search($event:any){

  }

  register(){
    this.router.navigate(["offers/create/register-vehicle"]);
  }

}
