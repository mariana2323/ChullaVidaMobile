import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {JugadoresPage} from "../../pages/jugadores/jugadores";
import {MenuPuntajesPage} from "../menu-puntajes/menu-puntajes";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  irJugadores(){
    this.navCtrl.push(JugadoresPage);
  }
  irMenuPuntajes(){
      this.navCtrl.push(MenuPuntajesPage);
  }

}
