import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersettingsPage } from './usersettings';

@NgModule({
  declarations: [
    UsersettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersettingsPage),
  ],
})
export class UsersettingsPageModule {}
