import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    collapse: boolean;
    items: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', collapse:false, items:[] },
    { path: 'my-account', title: 'My Account',  icon:'person', class: '', collapse:false, items:[] },

    { path: 'offers', title: 'My Offers',  icon:'content_paste', class: '', collapse:true, items:[

        { path: 'registered-vehicles', title: 'Registered Vehicles',  icon:'content_paste', class: '', collapse:false, items:[] },
        { path: 'offered-vehicles', title: 'Offered Vehicles',  icon:'content_paste', class: '', collapse:false, items:[] },
        { path: 'rented-vehicles', title: 'Rented Vehicles',  icon:'content_paste', class: '', collapse:false, items:[] },
        { path: 'closed-operations', title: 'Closed Operations',  icon:'content_paste', class: '', collapse:false, items:[] }
      ]
    },

    { path: 'rents', title: 'My Rents',  icon:'library_books', class: '', collapse:true, items:[

        { path: 'closed-rents', title: 'Closed Rents',  icon:'content_paste', class: '', collapse:false, items:[] },
        { path: 'search-vehicles', title: 'Search Vehicles',  icon:'content_paste', class: '', collapse:false, items:[] },
        { path: 'rent-vehicles', title: 'Rent Vehicles',  icon:'content_paste', class: '', collapse:false, items:[] }

      ]
    },
    { path: 'maps', title: 'Maps',  icon:'location_on', class: '', collapse:false, items:[] },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '', collapse:false, items:[] },
    { path: 'credit-amount', title: 'Credit Amount',  icon:'monetization_on', class: '', collapse:false, items:[] },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  routerPath($event:any, menuItem:any){

    console.log("$event", $event);
    this.router.navigate(['/'+menuItem.path]);

  }

}
