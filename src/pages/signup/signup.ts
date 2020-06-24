import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
login:any={};
  constructor(public http: HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  register()
  {
    this.navCtrl.pop();
  }

  onLogin()
  {
    this.http.post("https://primeshop.qa/apps/danube/request.php/request.php?req=register",this.login).subscribe((data:any) =>
        {
          alert("User Registered");
          this.navCtrl.pop();
        },
        err => {
          console.log(err.error);
        });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
