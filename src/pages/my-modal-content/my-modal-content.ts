import { Component } from "@angular/core";
import { ModalController, ViewController, NavController } from "ionic-angular";
import { OtherModalPage } from "../other-modal/other-modal";

/**
 * Generated class for the MyModalContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-my-modal-content",
  templateUrl: "my-modal-content.html"
})
export class MyModalContentPage {
  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyModalContentPage");
  }

  next() {
    this.navCtrl.push(OtherModalPage);
  }
}
