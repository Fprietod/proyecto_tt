import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { FCM } from '@ionic-native/fcm/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	email:	string;
	password: string;

  constructor(private authService: AuthService, public router: Router,
  private appAvailability: AppAvailability,
    private inAppBrowser: InAppBrowser, private fcm: FCM,public platform: Platform) {

  }

  onSubmitLogin(){
  this.authService.login(this.email, this.password).then( res=> {
  this.router.navigate(['/login']);
  }).catch(err => alert('Los datos son incorrectos o no existe el usuario'));
  }


  loginGoogle(){
  this.authService.loginWithGoogle().then(() => {
  this.router.navigate(['/login']);
  }).catch(err => alert('Los datos son incorrectos o no existe el usuario'+err))
  }

  loginFacebook(){
  this.authService.loginWithFacebook().then(() => {
  this.router.navigate(['/login']);
  }).catch(err => alert('Los datos son incorrectos o no existe el usuario'+err));

  }

  openTwitter(name) {
    let app;

    if (this.platform.is('ios')) {
      app = 'twitter://';
    } else if (this.platform.is('android')) {
      app = 'com.twitter.android';
    } else {
      const browser: InAppBrowserObject = this.inAppBrowser.create('https://twitter.com/' + name, '_system');
      return;
    }

    this.appAvailability.check(app)
      .then(
        (yes: boolean) => {
          console.log(app + ' is available')
          // Success
          // App exists
          const browser: InAppBrowserObject = this.inAppBrowser.create('twitter://user?screen_name=' + name, '_system');
        },
        (no: boolean) => {
          // Error
          // App does not exist
          // Open Web URL
          const browser: InAppBrowserObject = this.inAppBrowser.create('https://twitter.com/' + name, '_system');
        }
      );
  }

}


