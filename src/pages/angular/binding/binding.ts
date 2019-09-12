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

  ionViewDidLoad = () => {
    /**
     * getActive retorna a view atual
     */
    console.log(this.navCtrl.getActive());
    console.log(this.navCtrl.getActive().index);
  }

  retornaValor = () => this.valor + this.valor2;

  /**
   * Ele retira todas as páginas da pilha e vai para a página root atual
   */
  popToRoot = () => this.navCtrl.popToRoot();

  /**
   * Ele desempilha seguidamente todas as views da pilha.
   */
  popAll = () => this.navCtrl.popAll();

  /**
   * Inserção de páginas no array
   */
  insert = () => {
    //Insere 1 página
    this.navCtrl.insert(1, 'BindingPage', { name: 'Gabriel' });

    //insere várias páginas
    this.navCtrl.insertPages(1, [
      { page: 'BindingPage', params: { name: 'Gabriel' } },
      { page: 'BindingPage', params: { name: 'Gabriel' } },
      { page: 'BindingPage', params: { name: 'Gabriel' } }
    ]);
  };

  /**
   * Removendo views
   */
  remove = () => {
    /**
     * Remove a quantidade de páginas desejadas apartir de um index,
     * funciona como o splice do JavaScript
     */
    this.navCtrl.remove(1, 1);
  }

  /**
   * Retorna true ou false se o usuário pode voltar ou não na pilha
   */
  canGoBack = () => {
    console.log(this.navCtrl.canGoBack());
  }


}
