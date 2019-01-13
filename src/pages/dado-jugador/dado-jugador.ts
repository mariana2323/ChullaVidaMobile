import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DadoServiceProvider} from "../../providers/dado-service/dado-service";
import {DadosPage} from "../dados/dados";


/**
 * Generated class for the CartaJugadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-dado-jugador',
    templateUrl: 'dado-jugador.html',
})
export class DadoJugadorPage {

    public centesimas: number = 0;
    public minutos: number = 59;
    public segundos: number = 0;
    public contador: any;

    public _centesimas: string = '00';
    public _minutos: string = '00';
    public _segundos: string = '00';

    dado:any;
    cont=0;
    isenabled=false;

    isRun = false;
    estado: string = 'play';
    refreshColor = 'light';


    constructor(public navCtrl: NavController, public navParams: NavParams, public servProv:DadoServiceProvider) {
        this.servProv.getDados()
            .subscribe(
                (data) => {
                    this.dado = data;
                },
                (error) => {
                    console.log(error);
                }
            )
    }
    irDados(){
        this.navCtrl.push(DadosPage);
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
        var variable=this.dado.data[this.cont][0]["imagen"];
        return variable;
    }

    estadoSwap() {
        this.isRun = !this.isRun;
        if (this.isRun) {
            this.estado = 'pause';
            this.refreshColor = 'gris';
            this.start();
        } else {
            this.estado = 'play';
            this.refreshColor = 'light';
            this.pause();
        }

    }

    start() {

        this.contador = setInterval(() => {
            this.centesimas += 1;
            if (this.centesimas < 10) this._centesimas = '0' + this.centesimas;
            else this._centesimas = '' + this.centesimas;
            if (this.centesimas == 10) {
                this.centesimas = 0;
                this.segundos += 1;
                if (this.segundos < 10) this._segundos = '0' + this.segundos;
                else this._segundos = this.segundos + '';
                if (this.segundos == 60) {
                    this.segundos = 0;
                    this.minutos += 1;
                    if (this.minutos < 10) this._minutos = '0' + this.minutos;
                    else this._minutos = this.minutos + '';
                    this._segundos = '00';
                    if (this.minutos == 90) {
                        this.pause();
                    }
                }
            }
        }, 100)
    }

    pause() {
        clearInterval(this.contador);
    }

    stop() {

        if (!this.isRun) {
            clearInterval(this.contador);
            this.minutos = 0;
            this.segundos = 0;
            this.centesimas = 0;

            this._centesimas = '00';
            this._segundos = '00';
            this._minutos = '00';

            this.estado = 'play';
            this.isRun = false;
            this.contador = null;
        }

    }
}