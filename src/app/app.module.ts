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
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import { ChatComponent } from './componentes/chat/chat.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [AppComponent,ChatComponent],
  entryComponents: [ChatComponent],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    AppAvailability,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
