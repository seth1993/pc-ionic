import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { OrdersPage } from '../pages/orders/orders';
import { PrecheckoutPage } from '../pages/precheckout/precheckout';
import { ContactusPage } from '../pages/contactus/contactus';
import { UsersettingsPage } from '../pages/usersettings/usersettings';

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

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public auth: AuthProvider,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      auth.user.first().subscribe((user) => {
        if (user === null) {
          this.rootPage = 'auth-signin';
        }
      });
    });

    this.ordersPage = OrdersPage;
    this.contactusPage = ContactusPage;
    this.precheckoutPage = PrecheckoutPage;
    this.usersettingsPage = UsersettingsPage;
  }

  openPage(page) {
    console.info(page);
    this.nav.push(page);
  }

  signOut() {
    this.auth.logout();
    this.rootPage = 'auth-signin';
  }
}
