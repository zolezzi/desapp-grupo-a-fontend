import { Component, OnInit } from '@angular/core';
import { MapsComponent }  from '../../../maps/maps.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UserResourceApiService } from '../../../shared/services/user-resource-api.service';
import { VehicleResourceApiService } from '../../../shared/services/vehicle-resource-api.service';
import { PublicationResourceApiService } from '../../../shared/services/publication-resource-api.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-create-offer-vehicle',
  templateUrl: './create-offer-vehicle.component.html',
  styleUrls: ['./create-offer-vehicle.component.scss']
})
export class CreateOfferVehicleComponent implements OnInit {

  images: Array<string> = [];
  entity: any = {};
  imageSelected: string = '';
  vehicle: any = {};
  vehicles: Array<any> = [];
  router: any;
  userCurrent:any;
  types: Array<any> = [];
  disabled: boolean = true;

  constructor(protected route: ActivatedRoute, router:Router, protected userResourceApiService:UserResourceApiService,
    protected vehicleResourceApiService:VehicleResourceApiService, protected publicationResourceApiService:PublicationResourceApiService,
    protected localStorageService:LocalStorageService) {

      this.router = route;
  }

  ngOnInit() {

    this.images = [];

    var vehicleId = this.router.snapshot.params["id"];

    console.log("ID:", vehicleId);

    this.userCurrent = this.localStorageService.retrieve('userCurrent');

    this.entity.userOfferentId = this.userCurrent.id;

    this.vehicleResourceApiService.searchAllTypeVehicle().subscribe(result => {
      console.log("All types:", result);
      this.types = result;
    });

    this.vehicleResourceApiService.allMyVehiclesRegitered(this.userCurrent.id).subscribe(result => {
      this.vehicles = result;

      if(vehicleId != undefined){
        this.entity.vehicleId = Number(vehicleId);
        this.vehicle = this.vehicles.filter(vehicle => vehicle.id === Number(vehicleId))[0];
        console.log(this.vehicle);
      }

    });

  }

  addImage(){
    this.images.push(this.imageSelected);
    this.imageSelected = '';
  }

  createPublication(){
    console.log("*****CREATE PUBLICATION*****");

    this.entity.photos = this.images.filter(value => value != '');

    var start = this.entity.startingDate;
    var end = this.entity.endingDate

    this.entity.startingDate = new Date(start);
    this.entity.endingDate = new Date(end);

    this.publicationResourceApiService.setPublication(this.entity).subscribe(result => {
      console.log(result);
    });
  }

}
