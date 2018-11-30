import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServicePuntajesProvider} from "../../providers/puntajes-service/puntajes-service";

/**
 * Generated class for the PuntajesDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-puntajes-dados',
  templateUrl: 'puntajes-dados.html',
})
export class PuntajesDadosPage {
  puntajes1:any;
  puntajes2:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ServicePuntajesProvider: ServicePuntajesProvider) {
  }

  ionViewDidLoad() {
      this.ServicePuntajesProvider.getPuntajesTop5('dados')
          .subscribe(
              (data)=> {
                  this.puntajes1 = data;
              },
              (error) => {
                  console.log(error);
              }
          );
      this.ServicePuntajesProvider.getTopScore('dados')
          .subscribe(
              (data)=> {
                  this.puntajes2 = data;
              },
              (error) => {
                  console.log(error);
              }
          );
  }

}
