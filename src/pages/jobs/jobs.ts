import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { FileProvider } from '../../providers/file/file';

/**
 * Generated class for the JobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {
  data:any={};


  constructor(public navCtrl: NavController, public navParams: NavParams,public fileProvider:FileProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningServicePage');
  }

  
  getFile() {
    this.fileProvider.select();
  }
  hours(val) {
    this.data.hours = val;
  }


  

}