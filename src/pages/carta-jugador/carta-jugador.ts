import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CartasServiceProvider} from "../../providers/cartas-service/cartas-service";
/**
 * Generated class for the CartaJugadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carta-jugador',
  templateUrl: 'carta-jugador.html',
})
export class CartaJugadorPage {
cartas:any;
cont=0;
isenabled=false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servProv:CartasServiceProvider) {
      this.servProv.getCartas()
          .subscribe(
              (data) => {
                  this.cartas = data;
              },
              (error) => {
                  console.log(error);
              }
          )
  }


  public cambiar()
  {

      var imagen="../../assets/imgs/";
      var img=this.obtenerImg();
      imagen=imagen.concat(img).concat(".png");
      document.getElementById('imagenCarta').setAttribute('src',imagen);
      document.getElementById('nombreCarta').removeAttribute('hidden');
      document.getElementById('reglaCarta').removeAttribute('hidden');
      document.getElementById('jugador').removeAttribute('hidden');
      document.getElementById('btnVoltear').removeAttribute('hidden');

        this.isenabled=true;

      //document.getElementById('nombreCarta').setAttribute('showing','true');
  }


 public sumar()
    {
        var imagen="../../assets/imgs/carta-reverso.png";
        var numero=this.cont++;


        document.getElementById('imagenCarta').setAttribute('src',imagen);
        document.getElementById('nombreCarta').setAttribute('hidden','true');
        document.getElementById('reglaCarta').setAttribute('hidden','true');
        document.getElementById('jugador').setAttribute('hidden','true');
        document.getElementById('btnVoltear').setAttribute('disabled','true');
        this.isenabled=false;
    }

    public obtenerImg()
    {

        var variable=this.cartas.data[this.cont][0]["imagen"];
        return variable;
    }



}
