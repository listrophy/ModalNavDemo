import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ModalController,
  ViewController,
  IonicPage
} from "ionic-angular";

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad OtherModalPage");
  }

  doDismiss() {
    // console.log(JSON.stringify(this.navCtrl));
    // console.log(JSON.stringify(this.viewCtrl));
    console.log(JSON.stringify(this.navParams));
    this.viewCtrl.dismiss();
  }
}
