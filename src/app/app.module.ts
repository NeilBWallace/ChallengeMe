import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChallengePage } from '../pages/challenge/challenge';
import {MediaCapture} from '@ionic-native/media-capture';
 import {Camera} from '@ionic-native/camera';
 import { VideoPlayer } from '@ionic-native/video-player';
var config = {
  apiKey: "AIzaSyCE8z153bgKkDLJeGLRhIUrH4BC_7RLzU4",
  authDomain: "challenge-me-11dcc.firebaseapp.com",
  databaseURL: "https://challenge-me-11dcc.firebaseio.com",
  projectId: "challenge-me-11dcc",
  storageBucket: "challenge-me-11dcc.appspot.com",
  messagingSenderId: "406718256646"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ChallengePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    SignupPage,
    MyApp,
    HomePage,
    ChallengePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, MediaCapture,Camera,VideoPlayer
  ]
})
export class AppModule {}
