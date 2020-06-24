import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {CardPage} from "../card/card";
//import {OptionPage} from "../option/option";
//import {ShipPage} from "../ship/ship";
import {ChatPage} from "../chat/chat";
import {AboutPage} from "../about/about";
import {ContactPage} from "../contact/contact";
import {SignoutPage} from "../signout/signout";
/**
 * Generated class for the RootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-root',
  templateUrl: 'root.html',
})
export class RootPage {

  tab1Root = CardPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ChatPage;
  tab5Root = SignoutPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RootPage');
  }

}
