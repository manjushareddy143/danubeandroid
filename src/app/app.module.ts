import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ElectricianPage} from "../pages/electrician/electrician";
import {LocalMovingPage} from "../pages/local-moving/local-moving";
import {HandymanPage} from "../pages/handyman/handyman";
import {WarehousingPage} from "../pages/warehousing/warehousing";
import {RelocationPage} from "../pages/relocation/relocation";
import {HeavyEquipmentPage} from "../pages/heavy-equipment/heavy-equipment";
import {AirPage} from "../pages/air/air";
import {OptionPage} from "../pages/option/option";
import {RoadPage} from "../pages/road/road";
import {ShipPage} from "../pages/ship/ship";
import {Door2doorPage} from "../pages/door2door/door2door";
import { FileTransfer} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import {PersonalFlagPage} from "../pages/personal-flag/personal-flag";
import {RootPage} from "../pages/root/root";
import { FileChooser } from '@ionic-native/file-chooser';
import { FileProvider } from '../providers/file/file';
import {HttpClientModule} from "@angular/common/http";
import { FilePath } from '@ionic-native/file-path';
import {PremoveSurveyPage} from "../pages/premove-survey/premove-survey";
import {SignupPage} from "../pages/signup/signup";
import {IonicStorageModule} from "@ionic/storage";
import {CardPage} from "../pages/card/card";
import {ChatPage} from "../pages/chat/chat";
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import {IndexrootPage} from "../pages/indexroot/indexroot";
import {ChoosMenuPage} from "../pages/choos-menu/choos-menu";
//import { AutoCompleteModule } from 'ionic2-auto-complete';
import { DevExtremeModule } from 'devextreme-angular';
import {SignoutPage} from "../pages/signout/signout";
import { FeedbackPage } from '../pages/feedback/feedback';
import { RequirementPage } from '../pages/requirement/requirement';
import { ComplaintPage } from '../pages/complaint/complaint';
import { OffersPage } from '../pages/offers/offers';
import { DescrPage } from '../pages/descr/descr';
import { JobsPage } from '../pages/jobs/jobs';
//import { IOSFilePicker } from '@ionic-native/file-picker';
import {GoogleMaps} from '@ionic-native/google-maps';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ElectricianPage,
    LocalMovingPage,
    HandymanPage,
    WarehousingPage,
    RelocationPage,
    HeavyEquipmentPage,
    AirPage,
    OptionPage,
    RoadPage,
    ShipPage,
    Door2doorPage,
    PersonalFlagPage,
    RootPage,
    PremoveSurveyPage,
    SignupPage,
    CardPage,
    ChatPage,
    AboutPage,
    ContactPage,
    IndexrootPage,
    ChoosMenuPage,
    SignoutPage,
    FeedbackPage,
    RequirementPage,
    ComplaintPage,
    OffersPage,
    DescrPage,
    JobsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DevExtremeModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ElectricianPage,
    LocalMovingPage,
    HandymanPage,
    WarehousingPage,
    RelocationPage,
    HeavyEquipmentPage,
    AirPage,
    OptionPage,
    RoadPage,
    ShipPage,
    Door2doorPage,
    PersonalFlagPage,
      RootPage,
    PremoveSurveyPage,
    SignupPage,
    CardPage,
    ChatPage,
    AboutPage,
    ContactPage,
    IndexrootPage,
    ChoosMenuPage,
    SignoutPage,
    FeedbackPage,
    RequirementPage,
    ComplaintPage,
    OffersPage,
    DescrPage,
    JobsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    GoogleMaps,
    File,
    FileChooser,
//    IOSFilePicker,
    Camera,
    FileProvider,
    FilePath,
    Facebook,
    GooglePlus
  ]
})
export class AppModule {}
