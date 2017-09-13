import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyModalContentPage } from './my-modal-content';

@NgModule({
  declarations: [
    MyModalContentPage,
  ],
  imports: [
    IonicPageModule.forChild(MyModalContentPage),
  ],
})
export class MyModalContentPageModule {}
