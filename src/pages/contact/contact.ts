import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IntroduccionRuletaPage} from "../../pages/introduccion-ruleta/introduccion-ruleta";
import {IntroduccionDadosPage} from "../../pages/introduccion-dados/introduccion-dados";
import {IntroduccionCrtasPage} from "../introduccion-crtas/introduccion-crtas";

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
    irCrtasIntroduccion(){
        this.navCtrl.push(IntroduccionCrtasPage);
    }
}
