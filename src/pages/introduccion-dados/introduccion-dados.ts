import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DadosPage} from "../../pages/dados/dados";

/**
 * Generated class for the IntroduccionDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introduccion-dados',
  templateUrl: 'introduccion-dados.html',
})
export class IntroduccionDadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroduccionDadosPage');
  }
    irDados(){
        this.navCtrl.push(DadosPage);
    }
}


