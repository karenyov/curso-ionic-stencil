import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the NgclassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ngclass',
  templateUrl: 'ngclass.html',
})
export class NgclassPage {

  public css: string = '';
  public condicao: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NgclassPage');
  }

  dispararEvento = () => {
    this.events.publish('user:login', Math.floor(Math.random() * 1000));
  }

}
