import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IntroduccionRuletaPage} from "../../pages/introduccion-ruleta/introduccion-ruleta";
import {IntroduccionDadosPage} from "../../pages/introduccion-dados/introduccion-dados";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
    irRuletaIntroduccion(){
        this.navCtrl.push(IntroduccionRuletaPage);
    }
    irDadosIntroduccion(){
        this.navCtrl.push(IntroduccionDadosPage);
    }
}
