import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { UserResourceApiService } from '../../../shared/services/user-resource-api.service';
import { VehicleResourceApiService } from '../../../shared/services/vehicle-resource-api.service';

@Component({
  selector: 'app-registered-vehicles',
  templateUrl: './registered-vehicles.component.html',
  styleUrls: ['./registered-vehicles.component.scss']
})
export class RegisteredVehiclesComponent implements OnInit {

  entity:any = {};
  userSocial:any;
  userCurrent:any = {};
  types: Array<any> = [];

  constructor(protected userResourceApiService:UserResourceApiService, protected localStorageService:LocalStorageService,
    protected vehicleResourceApiService:VehicleResourceApiService) { }

  ngOnInit() {

    this.userSocial = this.localStorageService.retrieve('userSocial');

    if(this.userSocial != undefined){
      this.loadUserForSocialNetwork(this.userSocial)
    }

    this.vehicleResourceApiService.searchAllTypeVehicle().subscribe(result => {
      console.log("All types:", result);
      this.types = result;

    });

  }

  loadUserForSocialNetwork(userSocial:any){

    if(this.userSocial.provider === "GOOGLE"){
      this.entity.idGoogle = this.userSocial.provider + "-" + this.userSocial.id;
    }

    if(this.userSocial.provider === "FACEBOOK"){
      this.entity.idFacebook = this.userSocial.provider + "-" + this.userSocial.id;
    }

    this.userResourceApiService.getUserForSocialNetwork(this.entity).subscribe(result => {
      console.log(result);

      this.userCurrent = result;

    });

  }

  registerVehicle(){
    this.entity.userId = this.userCurrent.id;
    this.vehicleResourceApiService.addVehicle(this.entity).subscribe(result => {
      console.log(result);
    });
  }


}
