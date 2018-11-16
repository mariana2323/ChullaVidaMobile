import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadoServiceProvider } from '../../providers/dado-service/dado-service';

/**
 * Generated class for the DadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados',
  templateUrl: 'dados.html',
})
export class DadosPage {
  jugadores: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public DadoServiceProvider: DadoServiceProvider) {
  }
    ionViewDidLoad() {
        this.DadoServiceProvider.getJugadores()
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

