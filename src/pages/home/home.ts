import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {JugadoresPage} from "../../pages/jugadores/jugadores";

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

}
