import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { VehicleResourceApiService } from '../../../shared/services/vehicle-resource-api.service';
import { VehicleFilter } from '../../../model/models';

const now = new Date();

@Component({
  selector: 'app-list-closed-operations',
  templateUrl: './list-closed-operations.component.html',
  styleUrls: ['./list-closed-operations.component.scss']
})
export class ListClosedOperationsComponent implements OnInit {

  filter: any = {};
  toDate: Date;
  vehicles: Array<any> = [];

  constructor(protected route: ActivatedRoute, router:Router, protected vehicleResourceApiService:VehicleResourceApiService) { }


  ngOnInit() {
    this.filter = this.createFilter();

    this.vehicleResourceApiService.searchVehicle(this.filter).subscribe(result => {
      this.vehicles = result;
    });

  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  createFilter(): VehicleFilter {

    return <VehicleFilter>{
      type:null,
      state:"Closed",
      fromDate: new Date(),
      toDate: new Date()
    };

  }

  search(){

    console.log("*****SEARCH*****");

    this.vehicleResourceApiService.searchVehicle(this.filter).subscribe(result => {
      this.vehicles = result;
    });

  }

}
