import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPuntajesPage} from "../menu-puntajes/menu-puntajes";

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
  public MenuPuntajesPage: MenuPuntajesPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.puntajesA = this.MenuPuntajesPage.puntajes;
  }

}
