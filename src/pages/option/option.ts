import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ShipPage} from "../ship/ship";
import {PersonalFlagPage} from "../personal-flag/personal-flag";

/**
 * Generated class for the OptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-option',
  templateUrl: 'option.html',
})
export class OptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AirPage');
  }
  personal()
  {
    this.navCtrl.push(PersonalFlagPage,{type:"Ocean"});
  }

  commercial()
  {
    this.navCtrl.push(ShipPage,{type:"Ocean"});
  }

}
