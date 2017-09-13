import { NgModule } from "@angular/core";
import { MyModalWrapper } from "./my-modal-wrapper";
import { IonicModule } from "ionic-angular";
import { OtherModalPage } from "../../pages/other-modal/other-modal";
import { MyModalContentPage } from "../../pages/my-modal-content/my-modal-content";
import { MyModalContentPageModule } from "../../pages/my-modal-content/my-modal-content.module";
import { OtherModalPageModule } from "../../pages/other-modal/other-modal.module";
@NgModule({
  declarations: [MyModalWrapper],
  imports: [IonicModule, MyModalContentPageModule, OtherModalPageModule],
  entryComponents: [MyModalWrapper, MyModalContentPage, OtherModalPage],
  exports: [MyModalWrapper]
})
export class MyModalWrapperModule {}
