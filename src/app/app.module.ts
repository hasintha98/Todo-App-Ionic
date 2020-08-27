import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyAuhNRveyLUOjYdShqcTDlqjUT90jPemEk",
  authDomain: "todo-app-ionic-6b83f.firebaseapp.com",
  databaseURL: "https://todo-app-ionic-6b83f.firebaseio.com",
  projectId: "todo-app-ionic-6b83f",
  storageBucket: "todo-app-ionic-6b83f.appspot.com",
  messagingSenderId: "169277602364",
  appId: "1:169277602364:web:112b2d08420d8c326fa139",
  measurementId: "G-LG87XWZR9D"
});


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
