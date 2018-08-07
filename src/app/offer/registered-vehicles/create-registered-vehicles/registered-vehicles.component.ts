import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { UserResourceApiService } from '../../../shared/services/user-resource-api.service';
import { VehicleResourceApiService } from '../../../shared/services/vehicle-resource-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registered-vehicles',
  templateUrl: './registered-vehicles.component.html',
  styleUrls: ['./registered-vehicles.component.scss']
})
export class RegisteredVehiclesComponent implements OnInit {

  entity:any = {};
  router:any;
  userSocial:any;
  userCurrent:any = {};
  types: Array<any> = [];

  constructor(protected route: ActivatedRoute, router:Router, protected userResourceApiService:UserResourceApiService, protected localStorageService:LocalStorageService,
    protected vehicleResourceApiService:VehicleResourceApiService) {

      this.router = router;
    }

  ngOnInit() {

    this.userSocial = this.localStorageService.retrieve('userSocial');
    this.userCurrent = this.localStorageService.retrieve('userCurrent');

    if(this.userSocial != undefined){
        if(this.userCurrent == undefined){
          this.loadUserForSocialNetwork(this.userSocial)
        }

    }

    this.vehicleResourceApiService.searchAllTypeVehicle().subscribe(result => {
      console.log("All types:", result);
      this.types = result;

    });

  }

  loadUserForSocialNetwork(userSocial:any){

    if(this.userSocial.provider === "GOOGLE"){
      this.userSocial.idGoogle = this.userSocial.provider + "-" + this.userSocial.id;
    }

    if(this.userSocial.provider === "FACEBOOK"){
      this.userSocial.idFacebook = this.userSocial.provider + "-" + this.userSocial.id;
    }

    this.userResourceApiService.getUserForSocialNetwork(this.userSocial).subscribe(result => {
      console.log(result);

      this.userCurrent = result;

    });

  }

  registerVehicle(){
    this.entity.userId = this.userCurrent.id;
    console.log("Input Value:", this.entity);
    this.vehicleResourceApiService.addVehicle(this.entity).subscribe(result => {
      this.router.navigate(["offers/registered-vehicles"]);
    });
  }


}
