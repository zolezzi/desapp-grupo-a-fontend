import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserResourceApiService } from '../../../shared/services/user-resource-api.service';
import { VehicleResourceApiService } from '../../../shared/services/vehicle-resource-api.service';
import { PublicationResourceApiService } from '../../../shared/services/publication-resource-api.service';
import { LocalStorageService } from 'ngx-webstorage';
import { VehicleFilter } from '../../../model/models';

@Component({
  selector: 'app-list-offered-vehicles',
  templateUrl: './list-offered-vehicles.component.html',
  styleUrls: ['./list-offered-vehicles.component.scss']
})
export class ListOfferedVehiclesComponent implements OnInit {

  router:any;
  publications: Array<any> = [];
  userCurrent:any = {};

  constructor(protected route: ActivatedRoute, router:Router, protected userResourceApiService:UserResourceApiService,
    protected vehicleResourceApiService:VehicleResourceApiService, protected publicationResourceApiService:PublicationResourceApiService,
    protected localStorageService:LocalStorageService) {

    this.router = router;
  }

  ngOnInit() {

    this.userCurrent = this.localStorageService.retrieve('userCurrent');

    this.publicationResourceApiService.getUserPublications(this.userCurrent.id).subscribe(result => {
      console.log(result);
      this.publications = result;

    });

  }

  offerVehicle(){
    this.router.navigate(["offers/publish-vehicle/new"]);
  }

  edit(publication:any){
    this.router.navigate(["offers/publish-vehicle/edit/"+publication.id]);
  }

  delete(publication:any){
    this.publicationResourceApiService.deletePublication(publication.id);
  }


}
