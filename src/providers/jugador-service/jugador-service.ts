import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Platform} from "ionic-angular";
/*
  Generated class for the JugadorServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JugadorServiceProvider {

  basepath = "/api"
  constructor(public http: HttpClient, private _platform: Platform) {
    if (this._platform.is("cordova")){
      this.basepath = "servidorchullavida.herokuapp.com/api"
    }
  }
  getJugadores(){
      var resultado = this.http.get('https://servidorchullavida.herokuapp.com/api/consultarjugadores');
      console.log("resultado 1");
      console.log(resultado);
    return resultado;
  }
  saveJugadores(data){
      return new Promise((resolve, reject) => {
          this.http.post('https://servidorchullavida.herokuapp.com/api/agregarjugador', JSON.stringify(data), {
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
            this.http.delete('https://servidorchullavida.herokuapp.com/api/eliminarjugador/'+data, {
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
