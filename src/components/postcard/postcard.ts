import { Component, ViewChild, NgZone } from '@angular/core';
import {ElementRef,Renderer2} from '@angular/core';
import { NgStyle } from '@angular/common';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

//import { File } from '@ionic-native/file';

/**
 * Generated class for the PostcardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */


@Component({
  selector: 'postcard',
  templateUrl: 'postcard.html',
  providers: [PhotoLibrary]
})
export class PostcardComponent {

  text: string;
  width: number;
  cart: number;
  image: any;
  file: any;
  storageRef = firebase.storage().ref();

  constructor(private rd: Renderer2, private photoLibrary: PhotoLibrary, public zone:NgZone/*, private file: File*/) {
    console.log('Hello PostcardComponent Component');
    this.text = 'Hello World';
  }

  ngAfterViewInit() {
    console.log(this.rd);
    var card: any = document.getElementsByClassName("visible")[0];
    console.log("K ", card.offsetHeight);
    this.width = (3.0/2.0)*card.offsetHeight;
    this.cart = 1;
  }

  switchMenus() {
    console.log("Hey");
    var current = document.getElementsByClassName("show-menu")[0];
    current.classList.remove("show-menu");
    current.classList.add("hide-menu");
    var setto = document.getElementsByClassName("hide-menu")[0];
    setto.classList.remove("hide-menu");
    setto.classList.add("show-menu");

    
  }

  selectFile(e) {
    this.file = e.target.files[0];
    this.readPhoto(this.file);
  }

  readPhoto(file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.zone.run(() => {
        let path:any = e.target;
        this.image = path.result;
      });
    }
    reader.readAsDataURL(file);
  }

  addPicture(){
    this.storageRef.child("images/" + this.file.name).put(this.file).then((snapshot) =>{
      alert("Upload success");
    });
  }
}
