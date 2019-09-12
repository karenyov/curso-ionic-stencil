import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NgifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ngif',
  templateUrl: 'ngif.html',
})
export class NgifPage {
  public logado: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgifPage');
  }

  /**
   * É executado antes do método de willLeave
   */
  ionViewCanLeave = () => {
    if (Math.round(Math.random() * 10) > 1) {
      console.log('pode sair');
      return true;
    } else {
      console.log('Não pode sair');
      return false;
    }
  }

  /**
   * É executado antes do did Load
   */
  ionViewCanEnter = () => {
    if (Math.round(Math.random() * 10) > 5) {
      console.log('pode entrar');
      return true;
    } else {
      console.log('Não pode entrar');
      return false;
    }
  }

}
