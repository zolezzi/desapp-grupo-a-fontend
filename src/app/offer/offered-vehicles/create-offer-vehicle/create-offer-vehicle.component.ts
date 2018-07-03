import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-offer-vehicle',
  templateUrl: './create-offer-vehicle.component.html',
  styleUrls: ['./create-offer-vehicle.component.scss']
})
export class CreateOfferVehicleComponent implements OnInit {

  images: Array<string> = [];
  entity: any = {};
  imageSelected: string = '';

  constructor() { }

  ngOnInit() {

  }

  addImage(){
    this.images.push(this.imageSelected);
    this.imageSelected = '';
  }

}
