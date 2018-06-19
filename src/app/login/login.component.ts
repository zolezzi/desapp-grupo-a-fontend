import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  title = 'Carpnd';
  img = 'assets/public/img/carpnd2.jpg';
  myAppComponent : any
  private user: SocialUser;
  private loggedIn: boolean;
  @Input('appComponent') appComponent: AppComponent;

  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.redirectToHome();
    });

    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(assets/public/img/carpnd2.jpg)';

  }
  redirectToHome(){
    if(this.loggedIn){
      var body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = 'url(/)';
      this.myAppComponent = this.appComponent;
      this.appComponent.isNotLogin = false;
      this.appComponent.isLogin = true;
      this.router.navigate(['/home']);
    }
  }

  fbLogin() {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(/)';
    this.myAppComponent = this.appComponent;
    this.appComponent.isNotLogin = false;
    this.appComponent.isLogin = true;
    this.router.navigate(['/home']);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
