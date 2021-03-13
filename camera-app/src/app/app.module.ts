import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {DatePipe} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Camera} from '@ionic-native/camera/ngx';
import { FormsModule } from '@angular/forms';
import {Base64ToGallery} from '@ionic-native/base64-to-gallery/ngx';
import firebase from 'firebase';
import { Crop } from '@ionic-native/crop/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';
import { from } from 'rxjs';
import {ModalComponent} from 'src/app/components/modal/modal.component';
firebase.initializeApp({
  apiKey: "AIzaSyCmRhYQwhQIpx-m53nF61ou1isyy6RtPf0",
  authDomain: "camfire-ionicangular.firebaseapp.com",
  projectId: "camfire-ionicangular",
  storageBucket: "camfire-ionicangular.appspot.com",
  messagingSenderId: "93623570555",
  appId: "1:93623570555:web:0fea9465de7735912212de",
  measurementId: "G-NM0VMSHZL8"


});
@NgModule({
  declarations: [AppComponent, ModalComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    Downloader,
    DatePipe,
    Crop,
    Camera,
    StatusBar,
    SplashScreen,
    Base64ToGallery,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
