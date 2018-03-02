import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { PostcardComponent } from '../../components/postcard/postcard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    HomePage,
    PostcardComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    FileDropModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
