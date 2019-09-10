import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VirtualScrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-virtual-scroll',
  templateUrl: 'virtual-scroll.html',
})
export class VirtualScrollPage {

  itens: Array<{ nome: string, sobrenome: string, avatar: string }> = [
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' },
    { nome: 'Gabriel', sobrenome: 'Barreto', avatar: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VirtualScrollPage');
  }

  funcaoHeader = (item, itemIndex, itens) => {
    if (itemIndex % 10 === 0) {
      return `Número ${itemIndex}`
    }
    return null;
  }

}
