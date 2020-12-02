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
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ChatComponent } from './componentes/chat/chat.component';
import { FormsModule } from "@angular/forms";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { FCM } from '@ionic-native/fcm/ngx';
import { GoogleMaps } from '@ionic-native/google-maps/ngx'; 
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [AppComponent,ChatComponent],
  entryComponents: [ChatComponent],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,AngularFirestoreModule,AngularFireStorageModule,
    IonicStorageModule.forRoot()],
  providers: [
    GoogleMaps,
    Geolocation,
    FCM,
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
