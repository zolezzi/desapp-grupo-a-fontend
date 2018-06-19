import { Component, OnInit } from '@angular/core';
import { UserResourceApiService } from '../shared/services/user-resource-api.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor( protected userReosurceApiService:UserResourceApiService) { }

  ngOnInit() {

    this.userReosurceApiService.searchUsers().subscribe(
            result => {

              console.log("RESULTADO: ",result);

            },
            error => {
                console.log(<any>error);
            }
        );

  }

}
