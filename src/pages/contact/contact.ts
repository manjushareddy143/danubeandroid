import { Component, ViewChild, ElementRef } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {GoogleMaps,GoogleMap,Marker,GoogleMapOptions,MarkerOptions, LatLng} from '@ionic-native/google-maps';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
@ViewChild('map') mapElement:ElementRef;
map:GoogleMap;
marker:any;
current=0;
locations=[
  {name:"Industrial Area Branch",
  lat: 25.2510163,
  lng: 51.5646937,
  address:"<ion-row><ion-col col-6>Gate 22B, Street 33,Industrial Area, Doha  </ion-col><ion-col col-6>Mobile: 00974 66444121 <br>Tel: 00974 44116604<br>  Fax: 00974 44116608 <br>Email:kpraful@aldanube.com </ion-col></ion-row>"
},
{
  name:" Najma Branch",
  lat: 25.2115076,
  lng: 51.4471055,
  address:"Shop No 90,<br> Souq Haraj, <br>Najma"
},
{
  name:"Sailiya Branch",
  lat: 25.2479881,
  lng: 51.4310019,
  address:"Near Madina Supermarket,<br>Gate No 17, <br>Sailiya."
}
];


  constructor(public googlemaps:GoogleMaps,public navCtrl: NavController, public navParams: NavParams) {
  }

  getaddr()
  {
    return this.locations[this.current].address;
  }
  changes(event:any)
  {
    this.current=event;

    console.log("done",event);
    let locs:LatLng=new LatLng(this.locations[event].lat,this.locations[event].lng);
    //alert(locs);
    this.marker.setPosition(locs);
  }

  ionViewDidEnter() {
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
          
           lat: 25.2115076,
           lng: 51.4471055
         },
         zoom: 12,
         tilt: 30
       }
    };
    
    let element=this.mapElement.nativeElement;
    this.map=this.googlemaps.create(element);

    let locs:LatLng=new LatLng(25.2509909,51.5646912);
 
    let marker:MarkerOptions={
      position:locs,
      animation: 'DROP',
      title:"Danube Building Material"
    };

    this.map.addMarker(marker).then((marker:any)=>{
      this.marker=marker;
    });
    console.log('ionViewDidLoad ContactPage');
  }

}
