import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserResourceApiService } from '../../shared/services/user-resource-api.service';
import { VehicleResourceApiService } from '../../shared/services/vehicle-resource-api.service';
import { PublicationResourceApiService } from '../../shared/services/publication-resource-api.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-search-vehicles',
  templateUrl: './search-vehicles.component.html',
  styleUrls: ['./search-vehicles.component.scss']
})
export class SearchVehiclesComponent implements OnInit {

  router:any;
  publications: Array<any> = [];
  filter: any = {};
  userCurrent:any = {};

  constructor(protected route: ActivatedRoute, router:Router, protected userResourceApiService:UserResourceApiService,
    protected vehicleResourceApiService:VehicleResourceApiService, protected publicationResourceApiService:PublicationResourceApiService,
    protected localStorageService:LocalStorageService) {

      this.router = router;
  }

  ngOnInit() {

    this.userCurrent = this.localStorageService.retrieve('userCurrent');

    this.publicationResourceApiService.getallPublications().subscribe(result => {
      console.log(result);
      this.publications = result;

    });

  }

  rentVehicle(publication:any){
    this.router.navigate(["rents/rent-vehicle/new/"+publication.id]);
  }
  //rents/rent-vehicle/new/:id

}
