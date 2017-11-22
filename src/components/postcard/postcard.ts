import { Component, ViewChild } from '@angular/core';
import {ElementRef,Renderer2} from '@angular/core';
import { NgStyle } from '@angular/common';
import { PhotoLibrary } from '@ionic-native/photo-library';
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

  constructor(private rd: Renderer2, private photoLibrary: PhotoLibrary) {
    console.log('Hello PostcardComponent Component');
    this.text = 'Hello World';
  }

  ngAfterViewInit() {
    console.log(this.rd);
    var card: any = document.getElementsByClassName("visible")[0];
    console.log("K ", card.offsetHeight);
    this.width = (2.0/3.0)*card.offsetHeight;
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

  addPicture() {
    console.log("Hello ah yeah");
    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          library.forEach(function(libraryItem) {
            console.log(libraryItem.id);          // ID of the photo
            console.log(libraryItem.photoURL);    // Cross-platform access to photo
            console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            console.log(libraryItem.fileName);
            console.log(libraryItem.width);
            console.log(libraryItem.height);
            console.log(libraryItem.creationDate);
            console.log(libraryItem.latitude);
            console.log(libraryItem.longitude);
            console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
          });
        },
        error: err => { console.log('could not get photos'); },
        complete: () => { console.log('done getting photos'); }
      });
    })
    .catch(err => console.log('permissions weren\'t granted'));
  }
  
}
