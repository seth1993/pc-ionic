import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { OrdersPage } from '../pages/orders/orders';
import { PrecheckoutPage } from '../pages/precheckout/precheckout';
import { ContactusPage } from '../pages/contactus/contactus';
import { UsersettingsPage } from '../pages/usersettings/usersettings';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'home';
  @ViewChild(Nav) nav;
  private ordersPage;
  private contactusPage;
  private precheckoutPage;
  private usersettingsPage;
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  userId: string;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public auth: AuthProvider,
    db: AngularFireDatabase
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      auth.user.first().subscribe((user) => {
        console.log('Checking if logged in');
        if (user === null) {
          this.rootPage = 'auth-signin';
        } else {
          this.userId = user.uid;
        }
      });
    });

    this.ordersPage = OrdersPage;
    this.contactusPage = ContactusPage;
    this.precheckoutPage = PrecheckoutPage;
    this.usersettingsPage = UsersettingsPage;

    this.itemRef = db.object('users/CiHWISeHoCMHjA0qFJYK6Ihp4pu1');
    this.item = this.itemRef.valueChanges();
  }

  openPage(page) {
    console.info(page);
    this.nav.push(page);
  }

  signOut() {
    this.auth.logout();
    this.rootPage = 'auth-signin';
  }

  save() {
    this.itemRef.set({item: 'seth'}).then(_ => console.log('set!'));
  }
}
