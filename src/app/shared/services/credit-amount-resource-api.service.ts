import {Http, Headers, RequestMethod, RequestOptions,  RequestOptionsArgs, Response,URLSearchParams} from '@angular/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as models from '../../model/models';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class CreditAmountResourceApiService {

  protected basePath = 'http://localhost:8080/services';
  public defaultHeaders : Headers = new Headers();
  public url : string = '/credit-amount';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(protected http: Http, public httpClient: HttpClient) { }

  public getCreditAmount(userId:number, amount:number) : Observable<any> {

      const path = this.basePath + this.url + '/get-credit-account/${userId}'
          .replace('${' + 'userId' + '}', String(userId));

       return this.httpClient.get(path);

  }

  public addCredit(userId: number, amount:number): Observable<any>{

        let json = JSON.stringify(amount);

        let params = json;

        const path = this.basePath + '/credit-amount/add-credit/${userId}'
            .replace('${' + 'userId' + '}', String(userId));

        const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
            };

        return this.httpClient.post(path, params, httpOptions);
  }

  public loseCredit(userId: number, amount:number): Observable<any>{
        let json = JSON.stringify(amount);

        let params = json;

        const path = this.basePath + this.url + '/lose-credit/${userId}'
            .replace('${' + 'userId' + '}', String(userId));

        const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
            };

        return this.httpClient.post(path, params, httpOptions);
  }

}
