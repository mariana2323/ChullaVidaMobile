import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { JugadorServiceProvider} from "../../providers/jugador-service/jugador-service";


/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {
  jugadores: any;
  user = { id: 0, apodo: '', nombre: '', apellido: '', fecha:''};
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public JugadorServiceProvider: JugadorServiceProvider,
      private viewCtrl: ViewController
      ) {

  }

    ionViewDidEnter() {
    this.JugadorServiceProvider.getJugadores()
        .subscribe(
            (data)=> {
              this.jugadores = data;
            },
            (error) => {
              console.log(error);
            }
        )
  }
  saveJug(){
      this.JugadorServiceProvider.saveJugadores(this.user).then((result) => {
          console.log(result);
          this.viewCtrl._didEnter();
      }, (err) => {
          console.log(err);
      });
  }
  deleteJug(id){
      this.JugadorServiceProvider.deleteJugadores(id).then((result) => {
          console.log(result);
          this.viewCtrl._didEnter();
      }, (err) => {
          console.log(err);
      });
  }

}
