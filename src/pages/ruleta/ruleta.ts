import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
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
  giro= "nono";
  pin: any;
  user = { id: 0, apodo: '', nombre: '', apellido: '', fecha:''};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public RuletaServiceProvider: RuletaServiceProvider,
              private viewCtrl: ViewController,
              private alertCtrl: AlertController) {


  }

  ionViewDidLoad() {
      //document.getElementById('btnRegla').setAttribute('disabled','true');
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
    setGirar(){
        this.RuletaServiceProvider.setEstadoGiro(this.giro).then((result) => {
            console.log(result);
            this.viewCtrl._didEnter();
        }, (err) => {
            console.log(err);
        });
    }
    girarOnClick(){
        this.giro="aasa";
        setTimeout(() => {
            document.getElementById('btnRegla').removeAttribute('disabled');
            console.log("prueba")
        }, 10000)
      this.setGirar();
    }
    presentAlertRuleta() {
        this.RuletaServiceProvider.getPinRuleta()
            .subscribe(
                (data)=> {
                    this.pin = data;
                    console.log(data);
                    console.log(this.pin);
                    var nombre="Reto";
                    var detalle=this.pin.data[0]["descripcion"];
                    console.log("prueba1");
                    console.log(detalle);
                    console.log("prueba2");
                    let alert = this.alertCtrl.create({
                        title: nombre,
                        subTitle: detalle,
                        buttons: ['Ok']
                    });
                    alert.present();
                },
                (error) => {
                    console.log(error);
                }
            )


    }
}
