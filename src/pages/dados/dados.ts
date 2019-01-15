import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadoServiceProvider } from '../../providers/dado-service/dado-service';
import {DadoJugadorPage} from '../dado-jugador/dado-jugador';


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
  dados: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public servProv: DadoServiceProvider) {
  }
    irDadoJugador(){
       /* this.servProv.getDados()
            .subscribe(
                (data) => {
                    this.dados = data;
                },
                (error) => {
                    console.log(error);
                }
            )*/
        this.navCtrl.setRoot(DadoJugadorPage,{dados:this.dados});
    }
}


