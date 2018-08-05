import {Http, Headers, RequestMethod, RequestOptions,  RequestOptionsArgs, Response,URLSearchParams} from '@angular/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as models from '../../model/models';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class VehicleResourceApiService {

  protected basePath = 'http://localhost:8080/services';
  public defaultHeaders : Headers = new Headers();
  public url : string = '/vehicles';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(protected http: Http, public httpClient: HttpClient) { }

  public addVehicle(vehicleDto: any): Observable<any>{
        let json = JSON.stringify(vehicleDto);

        let params = json;

        const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'//'Content-Type', 'application/x-www-form-urlencoded'
              })
            };

        const path = this.basePath + this.url + '/add-vehicle'
          //  .replace('${' + 'id' + '}', String(id));

        return this.httpClient.post(path, params, httpOptions);
  }

  public searchVehicle(vehicleFilter : any) : Observable<any> {

      const path = this.basePath + this.url;

       let json = JSON.stringify(vehicleFilter);

       var params = json;


       const httpOptions = {
             headers: new HttpHeaders({
               'Content-Type':  'application/json'
             })
           };

       return this.httpClient.post(path + '/search-vehicle',
         params,httpOptions
       );

  }

  public getVehicle(id:number) : Observable<any> {

      const path = this.basePath + '/vehicles/get-vehicle/${id}'
          .replace('${' + 'id' + '}', String(id));

      const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };

       return this.httpClient.get(path);

  }

  public deleteVehicle(id:number) : Observable<any> {

      const path = this.basePath + '/vehicles/remove/${id}'
          .replace('${' + 'id' + '}', String(id));

       return this.httpClient.delete(path);

  }

  public update(vehicleDto: any): Observable<any>{
        let json = JSON.stringify(vehicleDto);

        let params = json;

        const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
            };

        return this.httpClient.post(this.basePath + this.url + '/update-vehicle', params, httpOptions);
  }

  public searchAllTypeVehicle() : Observable<any> {

      const path = this.basePath + this.url +'/all-type-vehicle';

      const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };


       return this.httpClient.get(path,httpOptions);

  }

  public allMyVehiclesRegitered(id: number) : Observable<any> {

    const path = this.basePath + this.url +'/all-my-vehicles-registered'
    const url = `${path}/${id}`;
       return this.httpClient.get<any>(url);

  }

}
