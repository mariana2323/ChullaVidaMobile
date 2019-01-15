import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import cards from '../../assets/data/card';
import {Card} from "../../providers/dado-service/dado-service";



/**
 * Generated class for the RandomCardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-dado-jugador',
    templateUrl: 'dado-jugador.html',
})
export class DadoJugadorPage implements OnInit {
    cards: Card[];
    randomCard: Card[];
    public centesimas: number = 0;
    public minutos: number = 59;
    public segundos: number = 0;
    public contador: any;

    public _centesimas: string = '00';
    public _minutos: string = '00';
    public _segundos: string = '00';

    carta:any;
    cont=0;
    isenabled=false;

    isRun = false;
    estado: string = 'play';
    refreshColor = 'light';


    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ngOnInit() {
        this.cards = cards.cards;

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad DadoJugadorPage');
        console.log(this.cards);

    }
    getRandom() {
        let rd = Math.floor(Math.random() * this.cards.length);
        this.randomCard = [this.cards[rd]];
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
