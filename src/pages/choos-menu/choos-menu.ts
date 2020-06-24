import { Component } from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ChoosMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-choos-menu',
  templateUrl: 'choos-menu.html',
})
export class ChoosMenuPage {
box:any={};
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }
  changed(a)
  {

  }

  submit()
  {
    console.log(this.box);
    this.viewCtrl.dismiss(this.box);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosMenuPage');
  }

}
