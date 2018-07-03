import { Component, OnInit } from '@angular/core';
import { } from '@types/googlemaps';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

declare const google: any;
interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
  //styles: ['    agm-map {height: 100vh;}', 'agm-map{max-width:none !important;}'],
})
export class MapsComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

//   constructor() { }
//
//   title: string = 'My first AGM project';
// lat: number = 51.678418;
// lng: number = 7.809007;
//   // @ViewChild('gmap') gmapElement: any;
//   // map: google.maps.Map;
//
//   ngOnInit() {
//     // var mapProp = {
//     //   center: new google.maps.LatLng(18.5793, 73.8143),
//     //   zoom: 15,
//     //   mapTypeId: google.maps.MapTypeId.ROADMAP
//     // };
//     // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
//   }

  // ngOnInit() {
  //     const myLatlng = new google.maps.LatLng(40.748817, -73.985428);
  //     const mapOptions = {
  //         zoom: 13,
  //         center: myLatlng,
  //         scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
  //         styles: [
  //             {'featureType': 'water', 'stylers': [{'saturation': 43}, {'lightness': -11}, {'hue': '#0088ff'}]},
  //             {'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{'hue': '#ff0000'},
  //             {'saturation': -100}, {'lightness': 99}]},
  //             {'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#808080'},
  //             {'lightness': 54}]},
  //             {'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ece2d9'}]},
  //             {'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ccdca1'}]},
  //             {'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#767676'}]},
  //             {'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{'color': '#ffffff'}]},
  //             {'featureType': 'poi', 'stylers': [{'visibility': 'off'}]},
  //             {'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{'visibility': 'on'},
  //             {'color': '#b8cb93'}]},
  //             {'featureType': 'poi.park', 'stylers': [{'visibility': 'on'}]},
  //             {'featureType': 'poi.sports_complex', 'stylers': [{'visibility': 'on'}]},
  //             {'featureType': 'poi.medical', 'stylers': [{'visibility': 'on'}]},
  //             {'featureType': 'poi.business', 'stylers': [{'visibility': 'simplified'}]}
  //         ]
  //     };
  //     const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  //     const Marker = new google.maps.Marker({
  //         position: myLatlng,
  //         title: 'Hello World!'
  //     });
  // // To add the marker to the map, call setMap();
  // Marker.setMap(map);
  // }

}
