import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {FileProvider} from "../../providers/file/file";

/**
 * Generated class for the PersonalFlagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-personal-flag',
  templateUrl: 'personal-flag.html',
})
export class PersonalFlagPage {
  data:any={};


  constructor(public navCtrl: NavController, public navParams: NavParams, public fileProvider:FileProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningServicePage');
  }

  uploadData()
  {
    this.data.type=this.navParams.get("type");
    this.fileProvider.upload(this.data,"Personal Effects");
  }

  bed(val) {
    this.data.num_of_bedroom = val;
  }


  getFile() {
    this.fileProvider.select();
  }



}