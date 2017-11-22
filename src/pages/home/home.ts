import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { PrecheckoutPage } from '../precheckout/precheckout';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cartNumber: number;
  precheckout = PrecheckoutPage;

  constructor(menu: MenuController, public navCtrl: NavController) {
    menu.enable(true);
    this.cartNumber = 1;
  }

  
  openPage(page) {
    console.log('Clicked in menu');
    this.navCtrl.push(page);
  }
}
