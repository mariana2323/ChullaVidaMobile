import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DadosPage} from "../dados/dados";
import {HomePage} from "../../pages/home/home";
import {ContactPage} from "../contact/contact";

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
    irHome(){
        this.navCtrl.push(HomePage);
    }
    irContact(){
        this.navCtrl.push(ContactPage);
    }
}
