import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CartasPage} from "../cartas/cartas";

/**
 * Generated class for the IntroduccionCrtasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introduccion-crtas',
  templateUrl: 'introduccion-crtas.html',
})
export class IntroduccionCrtasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroduccionCrtasPage');
  }
    irCartas(){
        this.navCtrl.push(CartasPage);
    }
}
