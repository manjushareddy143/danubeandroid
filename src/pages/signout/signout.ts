import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {IndexrootPage} from "../indexroot/indexroot";
/**
 * Generated class for the SignoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-signout',
  templateUrl: 'signout.html',
})
export class SignoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
  	 let elements = document.querySelectorAll(".tabbar");
      console.log((elements))

      if (elements != null) {

              elements["1"].style.display = 'none';
              elements["1"].remove();
               elements["0"].remove();

      }
  	this.navCtrl.setRoot(IndexrootPage);
    console.log('ionViewDidLoad SignoutPage');
  }

}
