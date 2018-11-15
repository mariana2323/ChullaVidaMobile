import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Platform} from "ionic-angular";

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
          this.basepath = "http://192.168.45.189:8100/api"
      }
  }
  jugadores(){
      return this.http.get(this.basepath.concat('/consultarjugadores'));
  }

}
