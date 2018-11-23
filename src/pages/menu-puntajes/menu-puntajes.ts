import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PuntajesPage} from "../puntajes/puntajes";
import {ServicePuntajesProvider} from "../../providers/puntajes-service/puntajes-service";

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
  irPuntajes(data){
      this.navCtrl.push(PuntajesPage);
      this.ServicePuntajesProvider.getPuntajesTop5(data)
          .subscribe(
              (data)=> {
                  this.puntajes = data;
              },
              (error) => {
                  console.log(error);
              }
          )
  }
  getPuntajes(){
      return this.puntajes;
  }

}
