import { Component, OnInit } from '@angular/core';
import { UserResourceApiService } from '../shared/services/user-resource-api.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  entity:any;

  constructor( protected userResourceApiService:UserResourceApiService) { }

  ngOnInit() {

    this.userResourceApiService.searchUsers().subscribe(
            result => {

              console.log("RESULTADO: ",result);

            },
            error => {
                console.log(<any>error);
            }
        );

  }

updateAccount($event){
  this.userResourceApiService.update(this.entity);
}

}
