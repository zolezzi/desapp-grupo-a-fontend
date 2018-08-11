import { Component, OnInit } from '@angular/core';
import { UserResourceApiService } from '../shared/services/user-resource-api.service';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../model/User';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ErrorHandler } from '../shared/utils/util/util.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  entity:User = {};
  router:any;
  userSocial:any;
  isCreate:boolean = true;
  errorMessage:string

  constructor(protected route: ActivatedRoute, router:Router, protected userResourceApiService:UserResourceApiService,
     protected localStorageService:LocalStorageService, private errorHandler: ErrorHandler,) {

    this.router = router;

  }

  ngOnInit() {

    this.userSocial = this.localStorageService.retrieve('userSocial');

    if(this.userSocial != undefined){
      this.loadUserForSocialNetwork(this.userSocial)
    }

  }

  loadUserForSocialNetwork(userSocial:any){

    if(this.userSocial.provider === "GOOGLE"){
      this.entity.idGoogle = this.userSocial.provider + "-" + this.userSocial.id;
    }

    if(this.userSocial.provider === "FACEBOOK"){
      this.entity.idFacebook = this.userSocial.provider + "-" + this.userSocial.id;
    }

    this.userResourceApiService.getUserForSocialNetwork(this.entity).subscribe(result => {
      console.log(result);
      this.entity = result;
      this.localStorageService.store('userCurrent', this.entity);
      this.isCreate = this.entity.isRegister;

    });

  }

  createAccount($event:any){
    console.log("CREATE");

    this.userResourceApiService.createUser(this.entity).subscribe(result => {
      this.router.navigate(["home"]);
    }, error => {
      this.errorMessage = this.errorHandler.handleError(error);
    });

  }

  updateAccount($event:any){
    console.log("UPDATE");
    if(this.userSocial.provider === "GOOGLE"){
      this.entity.idGoogle = this.userSocial.provider + "-" + this.userSocial.id;
    }

    if(this.userSocial.provider === "FACEBOOK"){
      this.entity.idFacebook = this.userSocial.provider + "-" + this.userSocial.id;
    }

    this.userResourceApiService.update(this.entity).subscribe(result => {
      console.log(result);
    });
  }

  ngAfterViewInit(){

  }

}
