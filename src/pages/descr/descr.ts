import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DescrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-descr',
  templateUrl: 'descr.html',
})
export class DescrPage {
data:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.data=this.navParams.get('data');
    console.log('ionViewDidLoad DescrPage',this.data);
  }

}
