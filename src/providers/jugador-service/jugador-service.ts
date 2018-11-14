import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JugadorServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JugadorServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello JugadorServiceProvider Provider');
  }
  getJugadores(){
    return this.http.get('localhost:8000/api/consultarjugadores');
  }

}
