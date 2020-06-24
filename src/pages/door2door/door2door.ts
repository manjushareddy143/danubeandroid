import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {PersonalFlagPage} from "../personal-flag/personal-flag";
import {ShipPage} from "../ship/ship";

/**
 * Generated class for the Door2doorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-door2door',
  templateUrl: 'door2door.html',
})
export class Door2doorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AirPage');
  }
  personal()
  {
    this.navCtrl.push(PersonalFlagPage,{type:"Door to Door"});
  }

  commercial()
  {
    this.navCtrl.push(ShipPage,{type:"Door to Door"});
  }

}
