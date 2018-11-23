import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPuntajesPage} from "../../pages/menu-puntajes/menu-puntajes";

/**
 * Generated class for the PuntajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-puntajes',
  templateUrl: 'puntajes.html',
})
export class PuntajesPage {
  puntajesA: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public MenuPuntajesPage: MenuPuntajesPage) {
    console.log('prueba');
  }

  ionViewDidLoad() {
    this.puntajesA = this.MenuPuntajesPage.getPuntajes();
  }

}
