import { Component } from "@angular/core";
import { NavParams, ViewController } from "ionic-angular";

/**
 * Generated class for the MyModalWrapperComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "my-modal-wrapper",
  template: `<ion-nav [root]="rootPage" [rootParams]="rootParams"></ion-nav>`
})
export class MyModalWrapper {
  rootPage = "MyModalContentPage";
  rootParams;

  constructor(navParams: NavParams, private viewCtrl: ViewController) {
    this.rootParams = Object.assign({}, navParams.data, { viewCtrl: viewCtrl });
    // This line will send the view controller into your child views, so you can dismiss the modals from there.
  }
}
