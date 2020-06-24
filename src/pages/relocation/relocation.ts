import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {FileProvider} from "../../providers/file/file";
import {PremoveSurveyPage} from "../premove-survey/premove-survey";

/**
 * Generated class for the RelocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-relocation',
  templateUrl: 'relocation.html',
})
export class RelocationPage {
  data:any={};


  constructor(public navCtrl: NavController, public navParams: NavParams, public fileProvider:FileProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningServicePage');
  }

  uploadData()
  {
    this.fileProvider.upload(this.data,"Relocation Service");
  }

  bed(val) {
    this.data.num_of_bedroom = val;
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
