import { Component } from "@angular/core";
import { NavController, NavParams, IonicPage } from "ionic-angular";

/**
 * Generated class for the OtherModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-other-modal",
  templateUrl: "other-modal.html"
})
export class OtherModalPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad OtherModalPage");
  }

  doDismiss() {
    this.navCtrl["rootParams"].viewCtrl.dismiss();
  }
}
