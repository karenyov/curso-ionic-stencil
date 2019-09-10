import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
})
export class RangePage {

  public range1: number = 0;
  public range2: number = 0;
  public range3: number = 0;
  public range4: number = 0;
  public range5: number = 0;
  public range6: number = 0;
  public range7 = {
    lower: 0,
    upper: 100
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RangePage');
  }

  valorMudou = () => {
    console.log(this.range7);
  }

}
