import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {FileProvider} from "../../providers/file/file";

/**
 * Generated class for the PremoveSurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-premove-survey',
  templateUrl: 'premove-survey.html',
})
export class PremoveSurveyPage {
data:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public fileProvider:FileProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PremoveSurveyPage');
  }

  uploadData()
  {
    this.fileProvider.upload(this.data,"PreMove Survey");
  }
}
