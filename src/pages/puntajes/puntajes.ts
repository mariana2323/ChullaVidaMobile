import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServicePuntajesProvider} from "../../providers/puntajes-service/puntajes-service";

/**
 * Generated class for the PuntajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-puntajes',
  templateUrl: 'puntajes.html',
})
export class PuntajesPage {
  puntajes1: any;
  puntajes2: any;
    //public MenuPuntajesPage: MenuPuntajesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ServicePuntajesProvider: ServicePuntajesProvider) {
  }

  ionViewDidLoad() {
      this.ServicePuntajesProvider.getPuntajesTop5('ruleta')
          .subscribe(
              (data)=> {
                  this.puntajes1 = data;
              },
              (error) => {
                  console.log(error);
              }
          );
      this.ServicePuntajesProvider.getTopScore('ruleta')
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
