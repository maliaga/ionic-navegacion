import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string= "";
  edad:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");

    console.log( this.nombre + " " + this.edad)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrarConParametros() {
    let data = {
      nombre: "Mario Aliaga",
      edad: 38,
      coords: {
        lat: 100,
        lng: 200
      }
    };
    this.viewCtrl.dismiss(data);
  }

  cerrarSinParametros() {
    this.viewCtrl.dismiss();
  }
}
