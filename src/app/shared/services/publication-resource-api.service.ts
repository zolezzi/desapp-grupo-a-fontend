import {Http, Headers, RequestMethod, RequestOptions,  RequestOptionsArgs, Response,URLSearchParams} from '@angular/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as models from '../../model/models';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class PublicationResourceApiService {

  protected basePath = 'http://localhost:8080/services';
  public defaultHeaders : Headers = new Headers();
  public url : string = '/publications';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(public httpClient: HttpClient) { }

  public getPublication(id:number) : Observable<any> {

      const path = this.basePath + this.url +'/publication/${id}'
          .replace('${' + 'id' + '}', String(id));

       return this.httpClient.get(path);

  }

  public setPublication(publicationDto: any): Observable<any>{
        let json = JSON.stringify(publicationDto);

        let params = json;

        const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'//'Content-Type', 'application/x-www-form-urlencoded'
              })
            };

        const path = this.basePath + this.url + '/set-publication'

        return this.httpClient.post(path, params, httpOptions);
  }

  public updatePublication(publicationDto: any): Observable<any>{
        let json = JSON.stringify(publicationDto);

        let params = json;

        const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
            };

        const path = this.basePath + this.url + '/update-publication"'

        return this.httpClient.post(path, params, httpOptions);
  }

  public deletePublication(id:number) : Observable<any> {

      const path = this.basePath + this.url +'/delete-publication/${id}'
          .replace('${' + 'id' + '}', String(id));

       return this.httpClient.delete(path);

  }

  public getUserPublications(id:number) : Observable<any> {

      const path = this.basePath + this.url +'/get-user-publications/${id}'
          .replace('${' + 'id' + '}', String(id));

       return this.httpClient.get(path);

  }

}
