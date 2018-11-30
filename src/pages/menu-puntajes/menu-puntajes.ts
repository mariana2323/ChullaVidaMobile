import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PuntajesPage} from "../puntajes/puntajes";
import {ServicePuntajesProvider} from "../../providers/puntajes-service/puntajes-service";
import {PuntajesDadosPage} from "../puntajes-dados/puntajes-dados";
import {PuntajeCartasPage} from "../puntaje-cartas/puntaje-cartas";

/**
 * Generated class for the MenuPuntajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-puntajes',
  templateUrl: 'menu-puntajes.html',
})
export class MenuPuntajesPage {
  puntajes: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ServicePuntajesProvider: ServicePuntajesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPuntajesPage');
  }
    irPuntajesRuleta(){
        this.navCtrl.push(PuntajesPage);
    }
    irPuntajesDados(){
        this.navCtrl.push(PuntajesDadosPage);
    }
    irPuntajesCartas(){
        this.navCtrl.push(PuntajeCartasPage);
    }

}
