import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html',
})
export class SearchbarPage {

  public itens: Array<{ nome: string }> = [];
  public itensFiltrados: Array<{ nome: string }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.itens = [{ nome: 'Alemanha' }, { nome: 'Brasil' }, { nome: 'Canada' }, { nome: 'Escocia' }, { nome: 'Finlandia' }, { nome: 'Groelandia' }];
    this.inicializador();
  }

  inicializador = () => {
    this.itensFiltrados = this.itens;
  }

  cancelar = () => console.log('cancelou');

  limpou = () => console.log('limpou');

  filter = ev => {
    this.inicializador();
    let val: string = ev.target.value;

    if (val && val.trim() != '') {
      this.itensFiltrados = this.itensFiltrados.filter(item => {
        return (item.nome.toLowerCase().includes(val.toLowerCase()))
      });
    }
  }

}
