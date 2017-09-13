import { NgModule } from "@angular/core";
import { MyModalWrapper } from "./my-modal-wrapper/my-modal-wrapper";
import { IonicModule } from "ionic-angular";
@NgModule({
  declarations: [MyModalWrapper],
  imports: [IonicModule],
  entryComponents: [MyModalWrapper],
  exports: [MyModalWrapper]
})
export class ComponentsModule {}
