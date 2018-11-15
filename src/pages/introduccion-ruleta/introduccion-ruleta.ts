import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RuletaPage} from "../../pages/ruleta/ruleta";

/**
 * Generated class for the IntroduccionRuletaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introduccion-ruleta',
  templateUrl: 'introduccion-ruleta.html',
})
export class IntroduccionRuletaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroduccionRuletaPage');
  }
    irRuleta(){
        this.navCtrl.push(RuletaPage);
    }
}
