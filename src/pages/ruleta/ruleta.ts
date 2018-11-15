import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RuletaServiceProvider} from "../../providers/ruleta-service/ruleta-service";

/**
 * Generated class for the RuletaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ruleta',
  templateUrl: 'ruleta.html',
})
export class RuletaPage {
  jugadores: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public RuletaServiceProvider: RuletaServiceProvider) {
  }

  ionViewDidLoad() {
      this.RuletaServiceProvider.jugadores()
          .subscribe(
              (data)=> {
                  this.jugadores = data;
              },
              (error) => {
                  console.log(error);
              }
          )
  }

}
