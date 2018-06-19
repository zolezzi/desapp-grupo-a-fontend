import {Http, Headers, RequestMethod, RequestOptions,  RequestOptionsArgs, Response,URLSearchParams} from '@angular/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as models from '../../model/models';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class UserResourceApiService {

  protected basePath = 'http://localhost:8080/services';
  public defaultHeaders : Headers = new Headers();
  public url : string = '/users/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(protected http: Http, public httpClient: HttpClient) { }


  public searchUsers() : Observable<any> {

      const path = this.basePath + '/users/all-users';

       return this.http.get(path);

  }

  public createUser(userDto: any): Observable<any>{
        let json = JSON.stringify(userDto);

        let params = "json="+json;

        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this.http.post(this.url+'add-user', params);
  }

  public getUser(id:number) : Observable<any> {

      const path = this.basePath + '/users/get-user/${id}'
          .replace('${' + 'id' + '}', String(id));

       return this.http.get(path);

  }

  public deleteUser(id:number) : Observable<any> {

      const path = this.basePath + '/users/delete-user/${id}'
          .replace('${' + 'id' + '}', String(id));

       return this.http.delete(path);

  }

  public update(userDto: any): Observable<any>{
        let json = JSON.stringify(userDto);

        let params = "json="+json;

        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this.http.put(this.basePath + this.url + '/update', params);
  }

  /*
    @POST
    @Path("/offer-vehicle/{id}")
    public UserDto offerVehicle (@PathParam("id") final Long id);
  */

}
