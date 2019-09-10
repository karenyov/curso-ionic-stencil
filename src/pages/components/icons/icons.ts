import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IconsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-icons',
  templateUrl: 'icons.html',
})
export class IconsPage {

  public icone: string = "home";
  public icones: Array<string> = ["home", "star", "clock", "trash", "logo-twitter", "add", "create", "analytics"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setInterval(() => {
      this.icone = this.icones[Math.round(Math.random() * (this.icones.length - 1))];
    }, 3000);
  }

}
