import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { MyModalContentPage } from "../pages/my-modal-content/my-modal-content";
import { OtherModalPage } from "../pages/other-modal/other-modal";

import { ComponentsModule } from "../components/components.module";
import { MyModalContentPageModule } from "../pages/my-modal-content/my-modal-content.module";
import { OtherModalPageModule } from "../pages/other-modal/other-modal.module";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    ComponentsModule,
    MyModalContentPageModule,
    OtherModalPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, MyModalContentPage, OtherModalPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
