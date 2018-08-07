import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() addressEventEmitter = new EventEmitter();

  selectedAddress:any

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = -34.6083;
    this.longitude = -58.3712;

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
          this.selectedAddress = {latitude: this.latitude, longitude: this.longitude};
          this.zoom = 12;
          this.addressEventEmitter.emit(this.selectedAddress);
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.selectedAddress = {latitude: this.latitude, longitude: this.longitude};
        this.zoom = 12;
        this.addressEventEmitter.emit(this.selectedAddress);
      });
    }
  }


}
//
// @Component({
//   selector: 'dial-accounts-map',
//   providers: [ nobac.AccountsApiService ],
//   styles: ['    agm-map {height: 100vh;}', 'agm-map{max-width:none !important;}'],
//   templateUrl: 'dailAccountInMap.html'
//   })
// export class DialAccountsInMap implements OnInit {
//
//   zoom: number = 5;
//   @Input("accounts") accounts:Array<nobac.AccountDetail>;
//
//   lat: number = 0.0;
//   lng:number = 0.0;
//
//   latlngBounds:any;
//   label: string;
//   accountAddress: nobac.CommercialAccount;
//   viewAccount : boolean = false;
//   @ViewChild(AgmMap) agmMap : AgmMap;
//   @HostListener('window:resize', ['$event'])
// 	public onResize(event) {
// 		this.redrawMap();
// 	}
//   showMap: boolean = true;
//   @ViewChild(AgmMap) map: any;
//
//
//   constructor(protected accountsApiService: nobac.AccountsApiService, protected accountsresourceApiService :  nobac.AccountsresourceApiService, private _mapsAPILoader: MapsAPILoader) {
//   }
//
//   ngOnInit(){
//     console.log("Init Maps");
//
//       this.centerMapForMarkers();
//
//   }
//
//   redraw () {
//
//     this.agmMap.triggerResize().then(() =>  (this.agmMap as any)._mapsWrapper.setCenter({lat: this.lat, lng: this.lng}));
//
//   }
//
//   clickedMarker($event){
//
//     if($event.type == "Proveedor"){
//       this.accountsApiService.getProviderAccount($event.id).subscribe(account => {
//         this.viewAccount = true;
//         this.accountAddress = account;
//       });
//     }else{
//
//       this.accountsApiService.getCommercialAccount($event.id).subscribe(account => {
//         this.viewAccount = true;
//         this.accountAddress = account;
//       });
//
//
//     }
//
//   }
//
//   centerMapForMarkers(){
//
//     this.latlngBounds = null;
//
//     this._mapsAPILoader.load().then(() => {
//
//         console.log('google script loaded');
//
//         this.latlngBounds = new google.maps.LatLngBounds();
//
//         this.accounts.forEach((location) => {
//
//           if(location.latitude != undefined && location.longitude != undefined){
//
//             this.latlngBounds.extend(new google.maps.LatLng(location.latitude, location.longitude))
//
//           }
//
//         });
//
//     });
//
//   }
//
//   redrawMap() {
//     console.log("redrawMap")
//     this.map.triggerResize()
//       .then(() => this.map._mapsWrapper.setCenter({lat: this.lat, lng: this.lng}));
//   }
//
//   setAccounts (accountsDetails: Array<any>){
//
//     this.accounts = accountsDetails;
//   }
//
//
// }
