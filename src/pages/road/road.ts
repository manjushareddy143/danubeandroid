import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ShipPage} from "../ship/ship";
import {PersonalFlagPage} from "../personal-flag/personal-flag";

/**
 * Generated class for the RoadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-road',
  templateUrl: 'road.html',
})
export class RoadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AirPage');
  }
  personal()
  {
    this.navCtrl.push(PersonalFlagPage,{type:"Road"});
  }

  commercial()
  {
    this.navCtrl.push(ShipPage,{type:"Road"});
  }

}
