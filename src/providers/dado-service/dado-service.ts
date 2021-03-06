import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Platform} from "ionic-angular";

/*
  Generated class for the DadoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface Card {
    id: string;
    jugador: string;
    reto1: string;
    reto2: string;
    accion: string;
}
@Injectable()
export class DadoServiceProvider {
  basepath = ""
  constructor(public http: HttpClient, private _platform: Platform) {
      /*if (this._platform.is("cordova")){
          this.basepath = "http://192.168.0.15:8100/api"
      }*/
  }

  /*getDados(){
      return this.http.get(this.basepath.concat('http://servidorchullavida.herokuapp.com/api/juegoDados'));
  }*/
    getJugadores(){
        return this.http.get(this.basepath.concat('http://servidorchullavida.herokuapp.com/api/dadosdesorden'));
    }
}
