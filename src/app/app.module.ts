import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {firebaseConfig} from "../environments/environment";
import {AngularFireModule} from "@angular/fire"
import {AngularFireAuthModule} from "@angular/fire/auth"
import { AngularFirestoreModule, SETTINGS } from "@angular/fire/firestore";
import { ChatComponent } from './componentes/chat/chat.component';
import { FormsModule } from "@angular/forms";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { Facebook } from '@ionic-native/facebook/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { GoogleMaps } from '@ionic-native/google-maps/ngx'; 
import { Geolocation } from '@ionic-native/geolocation/ngx';



@NgModule({
  declarations: [AppComponent,ChatComponent],
  entryComponents: [ChatComponent],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,AngularFirestoreModule],
  providers: [
    GoogleMaps,
    Geolocation,
    FCM,
    Facebook,
    GooglePlus,
    StatusBar,
    SplashScreen,
    AppAvailability,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: SETTINGS, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
