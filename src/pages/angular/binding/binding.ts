import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-binding',
  templateUrl: 'binding.html',
})
export class BindingPage {

  public valor: number = 1;
  public valor2: number = 2;

  public nome: string = 'Gabriel';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  retornaValor = () => this.valor + this.valor2;

}
