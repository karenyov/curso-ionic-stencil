import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfiniteScrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infinite-scroll',
  templateUrl: 'infinite-scroll.html',
})
export class InfiniteScrollPage {

  public itens: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    for (let i = 1; i <= 20; i++) this.itens.push(i);
  }

  /**
   * Sua chamada pro Database
   * SQL = TABELA DE 1000 ITENS
   * FIREBASE = NÓ 1000 ITENS
   * 20 por vez.
   * Quando for fazer uma chamada, vai enviar a quantidade de itens carregados.
   * Também deverá ser enviado, quantos itens a mais você quer carregar (20 em 20)
   * No seu banco de dados, você irá fazer uma query que irá pegar os valores a partir da 
   * posição do ultimo item carregado (length) até a posição de quantos valores você quer pegar.
   * Ex: length = 20;
   */
  carregarMais = ev => {
    let total = this.itens.length;
    let proximo = total + 20;

    if (this.itens.length < 60) {
      setTimeout(() => {
        for (let i = total; i < proximo; i++) this.itens.push(i);
        ev.complete();
      }, 4000);
    } else {
      ev.enable(false);
    }
  }

}
