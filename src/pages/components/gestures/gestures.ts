import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GesturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html',
})
export class GesturesPage {
  public tapped: number = 0;
  public pressed: number = 0;
  public paned: number = 0;
  public swiped: number = 0;
  public rotate: number = 0;
  public pinch: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  executarTap = ev => {
    this.tapped++;
  }

  executarPress = ev => {
    this.pressed++;
  }

  executarPan = ev => {
    this.paned++;
  }

  executarSwipe = ev => {
    this.swiped++;
  }

  executarRotate = ev => {
    this.rotate++;
  }

  executarPinch = ev => {
    this.pinch++;
  }
}
