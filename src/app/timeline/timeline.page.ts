import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import {MetroService, metro } from "../servicios/metro.service";
import { FCM } from '@ionic-native/fcm/ngx';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {
  
  public metrofeed :any =[];

  constructor(public platform: Platform,
    private appAvailability: AppAvailability,
    private inAppBrowser: InAppBrowser,
    public metroservice: MetroService,
    private fcm: FCM) { }

  ngOnInit() {
  this.metroservice. getMetroRooms().subscribe( chats => {
      
      this.metrofeed = chats;
      
    })

    this.fcm.getToken().then(token => {
    console.log(token)
                                      });
  
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
