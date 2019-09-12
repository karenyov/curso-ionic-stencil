import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      //da scroll até o final da página
      this.content.scrollToBottom(1000);
    }, 1000);


    setTimeout(() => {
      //da scroll até o começo da página
      this.content.scrollToTop(1000);
    }, 3000);

    /**
     * Informações de todas as dimenssões da tela
     */
    console.log('getContentDimensions', this.content.getContentDimensions());

    // o Height do conteudo visível na tela
    console.log('contentHeight', this.content.contentHeight);
    // o Width do conteudo visível na tela
    console.log('contentWidth', this.content.contentWidth);
    // é o tamanho total da tela, incluindo o scroll
    console.log('scrollHeight', this.content.scrollHeight);
  }

  onScroll = ev => { };

  scrollStart = ev => console.log('ionScrollStart', ev);

  scrollEnd = ev => console.log('ionScrollEnd', ev);

}
