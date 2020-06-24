import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {FileProvider} from "../../providers/file/file";
import {PremoveSurveyPage} from "../premove-survey/premove-survey";

/**
 * Generated class for the HeavyEquipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-heavy-equipment',
  templateUrl: 'heavy-equipment.html',
})
export class HeavyEquipmentPage {
  data:any={};


  constructor(public navCtrl: NavController, public navParams: NavParams, public fileProvider:FileProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningServicePage');
  }

  uploadData()
  {
    this.fileProvider.upload(this.data,"Heavy Equipment Service");
  }


  mode(val)
  {
    this.data.no_of_vehicles=val;
  }
  no(val) {
    this.data.no_of_vehicles = val;
  }

  freq(val) {
    this.data.frequency = val;
  }

  getFile() {
    this.fileProvider.select();
  }

  changeCls(no)
  {
    console.log(no);
    this.navCtrl.push(PremoveSurveyPage);
  }


}
