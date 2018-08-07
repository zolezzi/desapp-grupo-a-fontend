import { Component, OnInit } from '@angular/core';
import { MapsComponent }  from '../../../maps/maps.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UserResourceApiService } from '../../../shared/services/user-resource-api.service';
import { VehicleResourceApiService } from '../../../shared/services/vehicle-resource-api.service';
import { PublicationResourceApiService } from '../../../shared/services/publication-resource-api.service';
import { RentResourceApiService } from '../../../shared/services/rent-resource-api.service';
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
  routeActive:any = {};
  userCurrent:any;
  types: Array<any> = [];
  disabled: boolean = true;
  vehicleId : number;
  isANewRent: boolean;
  isSelectVehicleRegistered:boolean = true;
  entityRent: any = {};
  isCreatePublication:boolean = true;

  constructor(protected route: ActivatedRoute, router:Router, protected userResourceApiService:UserResourceApiService,
    protected vehicleResourceApiService:VehicleResourceApiService, protected publicationResourceApiService:PublicationResourceApiService,
    protected localStorageService:LocalStorageService, protected rentResourceApiService:RentResourceApiService) {

      this.routeActive = route;
      this.router = router;
  }

  ngOnInit() {

    this.images = [];

    var vehicleIdForParameter = this.routeActive.snapshot.params["id"];

    this.vehicleId = Number(vehicleIdForParameter);

    var value = this.routeActive.snapshot.url[2].path;

    this.userCurrent = this.localStorageService.retrieve('userCurrent');

    if(value === "new"){
      this.loadPublicationForRent();
    }

    if(value === "edit"){
      this.loadEditPublication();
    }

    if(value != "edit" && value != "new"){
      this.newPublication();
    }

    this.vehicleResourceApiService.searchAllTypeVehicle().subscribe(result => {
      this.types = result;
    });

  }

  loadPublicationForRent(){
    this.isANewRent = true;
    this.isCreatePublication = false;
    this.vehicles = [];
    var publicationId = this.routeActive.snapshot.params["id"];

    this.publicationResourceApiService.getPublication(Number(publicationId)).subscribe(result => {

      this.entity = result;
      this.entity.startingDate = new Date(this.entity.startingDate+'T00:00:00');
      this.entity.endingDate = new Date(this.entity.endingDate+'T00:00:00');
      this.images = this.entity.photos;

      this.vehicleResourceApiService.getVehicle(this.entity.vehicleId).subscribe(result => {
        this.vehicle = result;
        this.vehicles.push(this.vehicle);
      })

    })

  }

  loadEditPublication(){

  }

  newPublication(){
    this.isANewRent = false;
    this.isCreatePublication = true ;
    this.isSelectVehicleRegistered = true;
    this.entity.userOfferentId = this.userCurrent.id;

    this.vehicleResourceApiService.searchAllTypeVehicle().subscribe(result => {
      this.types = result;
    });

    this.vehicleResourceApiService.allMyVehiclesRegitered(this.userCurrent.id).subscribe(result => {
      this.vehicles = result;

      if(this.vehicleId != undefined){
        this.entity.vehicleId = this.vehicleId;
        this.vehicle = this.vehicles.filter(vehicle => vehicle.id === this.vehicleId)[0];
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
      this.router.navigate(["offers/offered-vehicles"]);
    });
  }

  rent(){

    this.entityRent.publicationId = this.entity.id;
    this.entityRent.userId = this.entity.userOfferentId;
    this.entityRent.renterId = this.userCurrent.id;

    this.rentResourceApiService.rentVehicle(this.entityRent).subscribe(result => {
      console.log(result);
      this.router.navigate(["rents/rent-vehicles"]);
    });
  }

}
