import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RefresherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-refresher',
  templateUrl: 'refresher.html',
})
export class RefresherPage {

  public itens: any[] = [];
  public texto: string = "Puxe para carregar...";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.gerarRamdomicos();
  }

  buscaDados = ev => {
    ev.cancel();
    if (this.itens.length < 30) {
      setTimeout(() => {
        this.gerarRamdomicos();
        ev.complete();
      }, 3500);
    } else {
      ev.enable(false);
    }
  }

  manipulaTexto = ev => {
    /**
     * inactive = O refresher está inativo
     * pulling: o refresher está sendo puxado.
     * cancelling: cancelou o evento de push do refresh
     * ready: o refresher está pronto para atualizar.
     * refreshing: está executando.
     * completing: está entrando no estado de completo
     */
    if (ev.state == 'ready')
      this.texto = "Pode soltar...";
  }

  gerarRamdomicos = () => {
    for (let i = 0; i < 4; i++) {
      this.itens.unshift(Math.round(Math.random() * 30));
    }
  }

}
