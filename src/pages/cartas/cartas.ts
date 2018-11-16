import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CartasServiceProvider} from "../../providers/cartas-service/cartas-service";

/**
 * Generated class for the CartasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartas',
  templateUrl: 'cartas.html',
})
export class CartasPage {
  jugadores: any;
  cartas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public CartasServiceProvider: CartasServiceProvider) {
  }

  ionViewDidLoad() {
      this.CartasServiceProvider.getCartas()
          .subscribe(
              (data)=> {
                  this.cartas = data;
              },
              (error) => {
                  console.log(error);
              }
          )
  }

}
