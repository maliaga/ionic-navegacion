import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante:any = {};

  constructor(public navParams: NavParams) {
    console.log(navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
    this.mutante = this.navParams.get("mutante");
  }

}
