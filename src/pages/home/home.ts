import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
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
    console.log("Showing modal");
    let modal = this.modalCtrl.create(MyModalWrapper);
    modal.present();
  }
}
