import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {CardPage} from "../card/card";
//import {OptionPage} from "../option/option";
//import {ShipPage} from "../ship/ship";
//import {ChatPage} from "../chat/chat";
import {AboutPage} from "../about/about";
import {ContactPage} from "../contact/contact";
import {HomePage} from "../home/home";
/**
 * Generated class for the IndexrootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-indexroot',
  templateUrl: 'indexroot.html',
})
export class IndexrootPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RootPage');
  }

}