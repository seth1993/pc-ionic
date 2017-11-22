import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { PostcardComponent } from '../../components/postcard/postcard';

@NgModule({
  declarations: [
    HomePage,
    PostcardComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
