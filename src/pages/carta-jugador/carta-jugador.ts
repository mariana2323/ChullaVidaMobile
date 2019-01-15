import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {CartasServiceProvider} from "../../providers/cartas-service/cartas-service";
import { AlertController } from 'ionic-angular';
import {ContactPage} from "../contact/contact";
import {ServicePuntajesProvider} from "../../providers/puntajes-service/puntajes-service";
//import {ServicePuntajesProvider} from "../../providers/puntajes-service";
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
carta=0;
cont=0;
isenabled=false;
puntaje = { id: 0, id_jugador: '', puntajes_cartas: 0, puntajes_dados: 0, puntajes_ruleta:0};

  constructor(private viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams, public servProv:CartasServiceProvider, public servProvPuntaje:ServicePuntajesProvider,private alertCtrl: AlertController) {
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
      document.getElementById('btnDetalle').removeAttribute('hidden');

        this.isenabled=true;
        if(this.cartas.data[this.cont][0]["numero"]=="K")
        {
            this.carta++;
        }
        if(this.carta==4)
        {
            document.getElementById('btnVoltear').setAttribute('hidden','true');
            document.getElementById('btnVirar').setAttribute('hidden','true');
            this.presentAlert2();
        }
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
        document.getElementById('btnDetalle').setAttribute('hidden','true');

        this.isenabled=false;
    }

    public obtenerImg()
    {

        var variable=this.cartas.data[this.cont][0]["imagen"];
        return variable;
    }
    presentAlert() {
        var nombre=this.cartas.data[this.cont][1]["descripcion"];
        var detalle=this.cartas.data[this.cont][1]["detalle"];
        let alert = this.alertCtrl.create({
            title: nombre,
            subTitle: detalle,
            buttons: ['Ok']
        });
        alert.present();
    }
    presentAlert2()
    {
        let alert = this.alertCtrl.create({
            title: "Se acabó el juego",
            subTitle: "Debes de beber todo el vaso!!",
            buttons: ['Ok']
        });
        alert.present();
    }
    public volver()
    {
        this.navCtrl.push(ContactPage);
    }
    /*public puntajeSum()
    {
        this.puntaje.id_jugador=this.cartas.data[this.cont][2]["id"];
        this.puntaje.puntajes_cartas=1;
        this.servProvPuntaje.savePuntaje(this.puntaje).then((result) => {
            console.log(result);
            this.viewCtrl._didEnter();
        }, (err) => {
            console.log(err);
        });
        this.puntaje = { id: 0, id_jugador: '', puntajes_cartas: 0, puntajes_dados: 0, puntajes_ruleta:0};
    }
*/


}
