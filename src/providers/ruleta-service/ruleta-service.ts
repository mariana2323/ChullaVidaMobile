import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
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
        if (this._platform.is("cordova")) {
            this.basepath = "servidorchullavida.herokuapp.com/api"
        }
    }

    jugadores() {
        return this.http.get('https://servidorchullavida.herokuapp.com/api/consultarjugadores');
    }

    getPinRuleta() {
        return this.http.get('https://servidorchullavida.herokuapp.com/api/getpin');
    }

    saveJugadores(data) {
        return new Promise((resolve, reject) => {
            this.http.post('https://servidorchullavida.herokuapp.com/api/agregarjugador', JSON.stringify(data), {
                headers: {'Content-Type': 'application/json'}
            }).subscribe(data => {
                resolve(data);
            }, (err) => {
                console.log(JSON.stringify(data));
                reject(err);
            });
        });
    }

    deleteJugadores(data) {
        return new Promise((resolve, reject) => {
            this.http.delete('https://servidorchullavida.herokuapp.com/api/eliminarjugador/' + data, {
                headers: {'Content-Type': 'application/json'}
            }).subscribe(data => {
                resolve(data);
            }, (err) => {
                console.log(JSON.stringify(data));
                reject(err);
            });
        });
    }

    setEstadoGiro(data) {
        return new Promise((resolve, reject) => {
            this.http.post('https://servidorchullavida.herokuapp.com/api/setgiro/' + data, JSON.stringify(data), {
                headers: {'Content-Type': 'application/json'}
            }).subscribe(data => {
                resolve(data);
            }, (err) => {
                console.log(JSON.stringify(data));
                reject(err);
            });
        });
    }

}
