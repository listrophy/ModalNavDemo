import { Component } from "@angular/core";
import {
  ModalController,
  ViewController,
  NavController,
  IonicPage
} from "ionic-angular";
import { OtherModalPage } from "../other-modal/other-modal";

@IonicPage()
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
