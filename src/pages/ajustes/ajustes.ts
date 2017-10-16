import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {ModalPage} from "../index.paginas";
import {isUndefined} from "ionic-angular/util/util";
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  nombre:string = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  activarPrincipal() {
    this.navCtrl.parent.select(2);
  }

  mostrarModal() {
    let modal = this.modalCtrl.create(ModalPage, { nombre:"Mario", edad:38});
    modal.present();
    modal.onDidDismiss( data => {
      console.log(data);
      if (data)
      this.nombre = data.nombre == undefined ? "" : data.nombre;
    })
  }
}
