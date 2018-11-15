import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RuletaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RuletaServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RuletaServiceProvider Provider');
  }
  jugadores(){
      return this.http.get('localhost:8000/api/consultarjugadores');
  }

}
