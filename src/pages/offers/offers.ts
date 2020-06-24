import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { DescrPage } from '../descr/descr';

/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  
offers:any=[];
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.http.get('https://primeshop.qa/apps/danube/request.php?req=offers')
    .subscribe((data: any) => {
        console.log(data);
        this.offers=data;
    })
    console.log('ionViewDidLoad OffersPage');
  }
  descr(offer:any)
  {
    this.navCtrl.push(DescrPage,{data:offer});

  }

}
