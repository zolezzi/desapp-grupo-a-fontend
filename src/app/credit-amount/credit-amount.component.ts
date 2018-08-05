import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from '../model/User';
import { Router, ActivatedRoute } from '@angular/router';
import { CreditAmountResourceApiService } from '../shared/services/credit-amount-resource-api.service';

@Component({
  selector: 'app-credit-amount',
  templateUrl: './credit-amount.component.html',
  styleUrls: ['./credit-amount.component.scss']
})
export class CreditAmountComponent implements OnInit {

  userCurrent:any = {};
  router:any
  entity:any = {};
  amount:number;

  constructor(protected route: ActivatedRoute, router:Router, protected creditAmountResourceApiService:CreditAmountResourceApiService,
    protected localStorageService:LocalStorageService) {

      this.router = router;
  }

  ngOnInit() {

    this.userCurrent = this.localStorageService.retrieve('userCurrent');


  }

  addCredit(){

    var id = this.userCurrent.id;

    this.creditAmountResourceApiService.addCredit(id, this.amount).subscribe(result => {
      this.localStorageService.store('userCurrent', result);
      this.amount = null;
      
    });
  }

}
