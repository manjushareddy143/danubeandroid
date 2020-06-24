import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {FileProvider} from "../../providers/file/file";
import {PremoveSurveyPage} from "../premove-survey/premove-survey";
import {HttpClient} from "@angular/common/http";
import {ShipPage} from "../ship/ship";

/**
 * Generated class for the WarehousingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-warehousing',
  templateUrl: 'warehousing.html',
})
export class WarehousingPage {
  data:any={};

  cats:any=[];
    myInput:any;
    search:any=[];
  constructor(public http: HttpClient,public navCtrl: NavController, public navParams: NavParams, public fileProvider:FileProvider) {
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
                    this.cats=[];
                    this.cats = data.categories;
                    this.cats = this.cats.concat(data.products);
                })
        }
        else
        {

          this.http.get('https://primeshop.qa/apps/danube/request.php/request.php?req=all_cats')
          .subscribe((data: any) => {
              console.log(data);
              this.cats = data;
          })
        }

        console.log("searching"+name+"data");
       
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
      
  }

  air(id,type)
    {
        if(type==="1")
        {
          //  alert("1");
            this.navCtrl.push(WarehousingPage,{id:id});
        }
        else
        {
              //  alert("2");
                this.navCtrl.push(ShipPage,{id:id});
        }

    }

  term(val)
  {
    this.data.mode_term=val;
  }
  aterm(val)
  {
    this.data.mode_another_term=val;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningServicePage');
  }

  mode(val)
  {
    this.data.mode_of_shipment=val;
  }

  uploadData()
  {
    this.fileProvider.upload(this.data,"Warehouse Service");
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
