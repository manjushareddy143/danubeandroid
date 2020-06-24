import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser';
//import { IOSFilePicker } from '@ionic-native/file-picker';

import {LoadingController, ToastController} from "ionic-angular";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
import { Storage } from '@ionic/storage';
/*
  Generated class for the FileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FileProvider {
fileURI:any;
  imageURI:any;
  uid:any;
  constructor(private fileChooser: FileChooser, public storage: Storage,private filePath: FilePath,private file: File,public http: HttpClient,private transfer: FileTransfer, private camera: Camera, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    console.log('Hello FileProvider Provider');
  }

  getResults(keyword:string) {
    return this.http.get("https://primeshop.qa/apps/danube/request.php/request.php?req=search&name="+keyword)
        .subscribe((data:any) => {
          console.log(data.categories);
          console.log(typeof data.categories);
            return data.categories.filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()) )

        })
  }
  user_details()
  {
    console.log(this.file);
    this.storage.get("login").then((data:any)=>{
      //alert("id"+data);
      this.uid=data;
    });
  }
  select()
  {
    this.fileChooser.open()
        .then((uri) =>
        {
          this.fileURI=uri;

          this.filePath.resolveNativePath(this.fileURI)
              .then(filePath =>
              {
                this.fileURI=filePath;
                console.log(filePath)
              })
              .catch(err => console.log("error"+err));


        })
        .catch(e => console.log(e));
  }


  upload(data:any,type:string)
  {
    this.http.post("https://primeshop.qa/apps/danube/request.php/upload.php?id="+this.uid+"&type="+type,data).subscribe((data:any) =>
    {
      alert("Data Uploaded");
      this.uploadFile(data.id);
    },
        err => {
          console.log('Error: ' + err.error);
        });
  }

  uploadFile(id) {
    if(this.fileURI) {
      let loader = this.loadingCtrl.create({
        content: "Uploading..."
      });
      loader.present();
      const fileTransfer: FileTransferObject = this.transfer.create();

      console.log(this.fileURI);

      var ext = this.fileURI.split(".").pop();


      let options: FileUploadOptions = {
        fileKey: 'filed',
        fileName: 'filed',
        chunkedMode: false,
        mimeType: "multipart/form-data",
        headers: {}
      };

      fileTransfer.upload(this.fileURI, 'https://primeshop.qa/apps/danube/request.php/upload_file.php?id=' + id+"&ext="+ext, options)
          .then((data) => {
            console.log(JSON.stringify(data) + " Upload Successfull");
            //this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
            loader.dismiss();
            this.uploadImage(id);
            this.presentToast("Image uploaded successfully");
          }, (err) => {
            console.log(err);
            loader.dismiss();
            this.presentToast(err);
          });
    }
    else
    {
      this.uploadImage(id);
    }
  }

  uploadImage(id:any) {
    if(this.imageURI) {
      let loader = this.loadingCtrl.create({
        content: "Uploading..."
      });
      loader.present();
      const fileTransfer: FileTransferObject = this.transfer.create();
      console.log(this.imageURI);

      var ext = this.imageURI.substring(
          this.imageURI.lastIndexOf(".") + 1,
          this.imageURI.lastIndexOf("?")
      );

      let options: FileUploadOptions = {
        fileKey: 'image',
        fileName: 'image',
        chunkedMode: false,
        mimeType: "multipart/form-data",
        headers: {}
      }

      fileTransfer.upload(this.imageURI, 'https://primeshop.qa/apps/danube/request.php/upload_image.php?id=' + id+"&ext="+ext, options)
          .then((data) => {
            console.log(JSON.stringify(data) + " Upload Successfull");
            //this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
            loader.dismiss();
            this.presentToast("Image uploaded successfully");
          }, (err) => {
            console.log(err);
            loader.dismiss();
            this.presentToast(err);
          });
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;

    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }
}
