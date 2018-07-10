import {Http, Headers, RequestMethod, RequestOptions,  RequestOptionsArgs, Response,URLSearchParams} from '@angular/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as models from '../../model/models';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class RentResourceApiService {

  protected basePath = 'http://localhost:8080/services';
  public defaultHeaders : Headers = new Headers();
  public url : string = '/rents';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(public httpClient: HttpClient) { }

  public getRent(rentId:number) : Observable<any> {

      const path = this.basePath + this.url +'/get-rent/{rentId}'
          .replace('${' + 'rentId' + '}', String(rentId));

       return this.httpClient.get(path);

  }

  public rentVehicle(rentDto: any): Observable<any>{
        let json = JSON.stringify(rentDto);

        let params = json;

        const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
            };

        const path = this.basePath + this.url + '/rent-vehicle'

        return this.httpClient.post(path, params, httpOptions);
  }

  public cancelRent(rentDto: any): Observable<any>{
        let json = JSON.stringify(rentDto);

        let params = json;

        const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
            };

        const path = this.basePath + this.url + '/cancel-rent'

        return this.httpClient.post(path, params, httpOptions);
  }

  public confirmWithdraw(rentDto: any): Observable<any>{
        let json = JSON.stringify(rentDto);

        let params = json;

        const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
            };

        const path = this.basePath + this.url + '/confirm-withdraw'

        return this.httpClient.post(path, params, httpOptions);
  }

  public confirmReturn(rentDto: any): Observable<any>{
        let json = JSON.stringify(rentDto);

        let params = json;

        const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
            };

        const path = this.basePath + this.url + '/confirm-return'

        return this.httpClient.post(path, params, httpOptions);
  }

  public searchRents(rentId:number) : Observable<any> {

      const path = this.basePath + this.url +'/search-rents'
          .replace('${' + 'rentId' + '}', String(rentId));

       return this.httpClient.get(path);

  }

}
