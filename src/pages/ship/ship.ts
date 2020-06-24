import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {FileProvider} from "../../providers/file/file";
import {PremoveSurveyPage} from "../premove-survey/premove-survey";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the ShipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-ship',
  templateUrl: 'ship.html',
})
export class ShipPage {
  data:any={};
  message:any="";
  img:any=[];
  constructor(public http: HttpClient,public navCtrl: NavController, public navParams: NavParams, public fileProvider:FileProvider) {
  }

  import()
  {
    this.data.mode="Import";
  }

  export()
  {
    this.data.mode="Export";
  }
  term(val)
  {
    this.data.mode_term=val;
  }
  aterm(val)
  {
    this.data.mode_another_term=val;
  }
  
  ionViewDidEnter() {
   let id= this.navParams.get('id');
   //alert(id);
   this.http.get('https://primeshop.qa/apps/danube/request.php/request.php?req=get_prod&id='+id)
        .subscribe((data: any) => {
          console.log(data['brands']);
          this.img=data['brands'];
        //  data['brands']=JSON.parse(data['brands']);
          data[0].images=JSON.parse(data[0].images);
          this.data=data[0];
        })
    console.log('ionViewDidLoad CleaningServicePage');
  }

  mode(val)
  {
    this.data.mode_of_shipment=val;
  }

  uploadData()
  {
    this.data.type=this.navParams.get("type");
    this.fileProvider.upload(this.data,"Commercial");
  }

  bed(val) {
    this.data.num_of_bedroom = val;
  }


  send() {
    
    this.http.post('https://primeshop.qa/apps/danube/request.php/request.php?req=add_enq',{data:this.message,uid:this.fileProvider.uid,id:this.navParams.get('id')})
        .subscribe((data: any) => {
          console.log(data);

        })
        alert("Your Enquiry has been sent we will contact with you soon...!");
  }

  changeCls(no)
  {
    console.log(no);
    this.navCtrl.push(PremoveSurveyPage);
  }



}
