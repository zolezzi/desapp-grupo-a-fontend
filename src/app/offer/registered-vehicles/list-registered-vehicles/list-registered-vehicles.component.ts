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
    this.userCurrent = this.localStorageService.retrieve('userCurrent');

    this.vehicleResourceApiService.allMyVehiclesRegitered(this.userCurrent.id).subscribe(result => {
      this.vehicles = result;
      console.log("Input Value",this.vehicles);
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

  edit(vehicle){
    this.router.navigate(["offers/register-vehicle/edit/"+vehicle.id+""]);
  }

  delete(vehicle){
    this.vehicleResourceApiService.deleteVehicle(vehicle.id);
  }

  offerVehicle(vehicle){
    this.router.navigate(["/offers/publish-vehicle/"+vehicle.id+""]);
  }

}
