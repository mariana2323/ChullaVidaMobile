import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Platform} from "ionic-angular";
import {JugadorServiceProvider} from "../jugador-service/jugador-service";

/*
  Generated class for the RuletaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RuletaServiceProvider {
    basepath = "/api"
  constructor(public http: HttpClient, private _platform: Platform) {
      if (this._platform.is("cordova")){
          this.basepath = "http://172.16.0.193:8100/api"
      }
  }
  jugadores(){
      return this.http.get(this.basepath.concat('/consultarjugadores'));
  }
    saveJugadores(data){
        return new Promise((resolve, reject) => {
            this.http.post(this.basepath.concat('/agregarjugador'), JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' }
            }).subscribe(data => {
                resolve(data);
            }, (err) => {
                console.log(JSON.stringify(data));
                reject(err);
            });
        });
    }
    deleteJugadores(data){
        return new Promise((resolve, reject) => {
            this.http.delete(this.basepath.concat('/eliminarjugador/'+data), {
                headers: { 'Content-Type': 'application/json' }
            }).subscribe(data => {
                resolve(data);
            }, (err) => {
                console.log(JSON.stringify(data));
                reject(err);
            });
        });
    }

}
