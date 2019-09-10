import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../home/home';

/**
 * Generated class for the MenusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menus',
  templateUrl: 'menus.html',
})
export class MenusPage {
  public itens: Array<{ titulo: string, componente: any }> = [
    { titulo: "Início", componente: HomePage }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenusPage');
  }

  irPagina = pagina => this.navCtrl.push(pagina)

}
