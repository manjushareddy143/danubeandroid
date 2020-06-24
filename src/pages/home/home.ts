import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {RootPage} from "../root/root";
//import {CardPage} from "../card/card";
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Facebook,FacebookLoginResponse } from '@ionic-native/facebook';

import {SignupPage} from "../signup/signup";
import {FileProvider} from "../../providers/file/file";
import { map } from 'rxjs/operators';
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
login:any={};
  constructor(private googlePlus: GooglePlus, private fb: Facebook,public fileProvider:FileProvider,public loadingCtrl:LoadingController,public http: HttpClient, public storage: Storage,public navCtrl: NavController) {

  }
//65395744489-ea8f0hh562mv1m16tdk7bpkrmtqpluhq.apps.googleusercontent.com

google()
{
  this.googlePlus.login({})
  .then((res:any) => {
    this.http.post("https://primeshop.qa/apps/danube/request.php?req=social_login", {"name":res.displayName,"email":res.email})
    //   .pipe(map((response: any) => response.json()))
       .subscribe((resp:any) => {
      //   alert(JSON.stringify(resp));
         this.fileProvider.uid=resp[0].uid;
         console.log(resp[0].id);
         this.storage.set("login",resp[0].uid);
         this.navCtrl.push(RootPage,{id:resp[0].uid});
       });
    console.log(res)
  }
  )
  .catch(err => console.error(err));
}
  facebook() 
  {
    this.fb.login(["email"])
  .then((res: FacebookLoginResponse) => {
    console.log('Logged into Facebook!', res)
    this.http.get("https://graph.facebook.com/v3.1/me?fields=id%2Cname%2Cemail&access_token="+res.authResponse.accessToken) 
  //  .pipe(map((response: any) => response.json()))
    .subscribe((data:any) => {
    //  alert(JSON.stringify(data));
     
      this.http.post("https://primeshop.qa/apps/danube/request.php?req=social_login", {"name":data.name,"email":data.email})
   //   .pipe(map((response: any) => response.json()))
      .subscribe((resp:any) => {
     //   alert(JSON.stringify(resp));
        this.fileProvider.uid=resp[0].uid;
        console.log(resp[0].id);
        this.storage.set("login",resp[0].uid);
        this.navCtrl.push(RootPage,{id:resp[0].uid});
      });





      console.log(data);
    }); 

   
  })
 
//this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
}

  toRoot() {
    this.navCtrl.push(RootPage);
  }

    register()
    {
        this.navCtrl.push(SignupPage);
    }
  onLogin()
  {
    if(this.login.email!=""&&this.login.pass)
    {
        let loading = this.loadingCtrl.create({
            content: 'Loading...'
        });

        loading.present();
      this.http.post('https://primeshop.qa/apps/danube/request.php/request.php?req=login', this.login)
          .subscribe((data:any) => {
            console.log(data);
              loading.dismiss();
            if(data.length!=0)
            {
                this.fileProvider.uid=data[0].uid;
              console.log(data[0].id);
              this.storage.set("login",data[0].uid);
              this.navCtrl.push(RootPage,{id:data[0].uid});
            }
            else
            {
              alert("Invalid username Or pass");
            }
          })
    }
    else
    {
      alert("Please fill both the fields ");
    }
  }

}
