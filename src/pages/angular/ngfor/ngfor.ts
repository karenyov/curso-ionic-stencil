import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NgforPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ngfor',
  templateUrl: 'ngfor.html',
})
export class NgforPage {

  @ViewChild('element') el: ElementRef;

  public array: any = [
    { nome: 'Gabriel', sobrenome: 'Barreto', notas: [1, 2, 3, 4, 5] },
    { nome: 'Gabriel', sobrenome: 'Barreto', notas: [1, 2, 3, 4, 5] }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public renderer: Renderer2) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      const div = this.renderer.createElement('div');
      const text = this.renderer.createText('Hello World!');

      this.renderer.appendChild(div, text);
      this.renderer.appendChild(this.el.nativeElement, div);
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }, 3000);
  }

}
