import { Component } from '@angular/core';
import { NavController, NavParams, App} from 'ionic-angular';
import {ElectricianPage} from "../electrician/electrician";
import {HandymanPage} from "../handyman/handyman";
import {WarehousingPage} from "../warehousing/warehousing";
import {RelocationPage} from "../relocation/relocation";
import {HeavyEquipmentPage} from "../heavy-equipment/heavy-equipment";
//import {AirPage} from "../air/air";
import {OptionPage} from "../option/option";
import {RoadPage} from "../road/road";
import {ShipPage} from "../ship/ship";
import {Door2doorPage} from "../door2door/door2door";
import {FileProvider} from "../../providers/file/file";
import {HttpClient} from "@angular/common/http";
import { AboutPage } from '../about/about';
import { RequirementPage } from '../requirement/requirement';
import { FeedbackPage } from '../feedback/feedback';
import { ComplaintPage } from '../complaint/complaint';
import { OffersPage } from '../offers/offers';
import { JobsPage } from '../jobs/jobs';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
cats:any=[];
    myInput:any;
    search:any=[];
  constructor(public app: App, public http: HttpClient,public file:FileProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  offers()
  {
      this.navCtrl.push(OffersPage);
  }

  jobs()
  {
      this.navCtrl.push(JobsPage);
  }
    onValueChanged(data:any)
    {
        alert("fd");
        console.log(data);
    }

    onInput(name:any)
    {
        if(name) {
            this.http.get('https://primeshop.qa/apps/danube/request.php/request.php?req=search&name=' + name)
                .subscribe((data: any) => {
                    console.log(data);
                    this.search = data.categories;
                    this.search = this.search.concat(data.products);
                })
        }
        else
        {
            this.search=[];
        }

        console.log("searching"+name+"data");
       
    }
    complaint()
    {
        this.navCtrl.push(ComplaintPage);
    }
    quote()
    {
        this.navCtrl.push(RequirementPage);
    }
    feedback()
    {
        this.navCtrl.push(FeedbackPage);
    }
  ionViewDidEnter() {
      console.log("sss");
      let d=this.navParams.get('id');
         console.log(d);
      //this.file.user_details();
    console.log('ionViewDidLoad CardPage');
    if(typeof d!='undefined')
    {
        this.http.get('https://primeshop.qa/apps/danube/request.php/request.php?req=get_cat&id='+d)
            .subscribe((data: any) => {
                console.log(data);
                this.cats = data.categories;
                this.cats=this.cats.concat(data.products);
                console.log(this.cats);
            })
    }
    else {

        this.http.get('https://primeshop.qa/apps/danube/request.php/request.php?req=all_cats')
            .subscribe((data: any) => {
                console.log(data);
                this.cats = data;
            })
    }
      let elements = document.querySelectorAll(".tabbar");
      console.log(typeof (elements))

      if (elements != null) {

              elements["0"].style.display = 'none';

      }
  }
  profile()
  {
    this.navCtrl.push(AboutPage);
  }

  contact()
  {
      this.navCtrl.push(ContactPage);
  }

 electrician()
  {
    this.navCtrl.push(ElectricianPage);
  }
    handyman()
    {
        this.navCtrl.push(HandymanPage);
    }
    products()
    {
        
        this.navCtrl.push(WarehousingPage);
    }
    relocation()
    {
        this.navCtrl.push(RelocationPage);
    }
    heavy()
    {
        this.navCtrl.push(HeavyEquipmentPage);
    }



    air(id,type)
    {
        if(type==="1")
        {
            alert("1");
            this.navCtrl.push(CardPage,{id:id});
        }
        else
        {
                alert("2");
                this.navCtrl.push(ShipPage,{id:id});
        }

    }
    ocean()
    {
        this.navCtrl.push(OptionPage);
    }
    road()
    {
        this.navCtrl.push(RoadPage);
    }
    commercial()
    {
        this.navCtrl.push(ShipPage,{type:"Commercial"});
    }
 
    door()
    {
        this.navCtrl.push(Door2doorPage);
    }

}
//AIzaSyDhysvX0fauhXP5KS68aZQWmqx0IoGwhoI android
//AIzaSyCBUVeT4C40JbpCNPLw8HcvKGnnTxkouM4