import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {FileProvider} from "../../providers/file/file";
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  msgs: any;
  messages1: any;
  myVar: any;
  stop: boolean = false;
  uid: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public loadingCtrl: LoadingController, public file: FileProvider) {
  }

  ionViewWillLeave() {
    this.stop = true;
    console.log("stop");

  }

  mychats() {
    if (this.stop == false) {


      this.http.get('https://primeshop.qa/apps/danube/request.php/request.php?req=get_msg&uid=' + this.file.uid)

          .subscribe(data => {

            this.msgs = data;
            this.myVar = setInterval(this.mychats(), 90000);

          }, err => {

            console.log(err);

          });
    }
  }

  myddt(val: number) {
    if (val == 0) {
      return false;
    }
    else {
      return true;
    }
  }

  chat() {
    if (this.messages1 != 'undefined') {
      if (this.messages1.replace(/\s/g, '').length != 0) {
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });


        loading.present();
        this.http.post('https://primeshop.qa/apps/danube/request.php/request.php?req=add_msg&from=0&uid=' + this.file.uid, {message: (this.messages1)})
            .subscribe(data => {
              console.log(data);

              loading.dismiss();
              this.mychats();
              this.messages1 = "";

            }, err => {
              loading.dismiss();
              console.log(err);
            });
      }
    }
  }

  ionViewDidEnter() {
    this.stop = false;
    console.log('ionViewDidLoad ChatPage');


    this.mychats();

  }
}