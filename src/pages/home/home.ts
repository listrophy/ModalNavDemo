import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { MyModalContentPage } from "../my-modal-content/my-modal-content";
import { MyModalWrapper } from "../../components/my-modal-wrapper/my-modal-wrapper";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  showModal() {
    let modal = this.modalCtrl.create(MyModalWrapper);
    modal.present();
  }
}
