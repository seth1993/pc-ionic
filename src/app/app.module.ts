import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
import { File } from '@ionic-native/file';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthProvider } from '../providers/auth/auth';
import { DataProvider } from '../providers/data/data';
import { FunctionsProvider } from '../providers/functions/functions';

import { OrdersPage } from '../pages/orders/orders';
import { PrecheckoutPage } from '../pages/precheckout/precheckout';
import { ContactusPage } from '../pages/contactus/contactus';
import { UsersettingsPage } from '../pages/usersettings/usersettings';

const firebaseConfig = {
  apiKey: 'AIzaSyBLb1hdW2yKUNuQNLEgsPOYxV6MwMROhyc',
  authDomain: 'snap-post-card.firebaseapp.com',
  databaseURL: 'https://snap-post-card.firebaseio.com',
  projectId: 'snap-post-card',
  storageBucket: 'gs://snap-post-card.appspot.com',
  messagingSenderId: '535409157405'
};

@NgModule({
  declarations: [
    MyApp,
    PrecheckoutPage,
    ContactusPage,
    UsersettingsPage,
    OrdersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrecheckoutPage,
    ContactusPage,
    UsersettingsPage,
    OrdersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    DataProvider,
    FunctionsProvider,
    File
  ]
})
export class AppModule {
}
