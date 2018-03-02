import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { PrecheckoutPage } from '../precheckout/precheckout';
import { UploadEvent, UploadFile } from 'ngx-file-drop';
import { Component, ViewChild, NgZone } from '@angular/core';
import {ElementRef,Renderer2} from '@angular/core';
import { NgStyle } from '@angular/common';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PhotoLibrary]
})
export class HomePage {
  cartNumber: number;
  precheckout = PrecheckoutPage;
  public files: UploadFile[] = [];
  text: string;
  width: number;
  cart: number;
  image: any;
  file: any;
  storageRef = firebase.storage().ref();
  backSide: boolean;


  constructor(menu: MenuController, public navCtrl: NavController, private rd: Renderer2, private photoLibrary: PhotoLibrary, public zone:NgZone/*, private file: File*/) {
    menu.enable(true);
    this.cartNumber = 1;
    this.text = 'Hello World';
    this.backSide = false;
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
        console.log(e);
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

  switchSides(){
    console.log("Switch sides");

    this.backSide = !this.backSide;
  }

  openPage(page) {
    console.log('Clicked in menu');
    this.navCtrl.push(page);
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const file of event.files) {
      file.fileEntry.file(info => {
        var reader = new FileReader();
        var preview = document.getElementById('postcardImage');
        reader.addEventListener("load", function () {
          (<HTMLImageElement>preview).src = reader.result;
        }, false);
        reader.readAsDataURL(info);
      });
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }
}
