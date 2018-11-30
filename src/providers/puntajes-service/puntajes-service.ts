import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Platform} from "ionic-angular";

/*
  Generated class for the ServicePuntajesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicePuntajesProvider {
  basepath = "/api"
  constructor(public http: HttpClient, private _platform: Platform) {
      if (this._platform.is("cordova")){
          this.basepath = "http://192.168.0.15:8100/api"
      }
  }
  getPuntajesTop5(data){
      return this.http.get(this.basepath.concat('/getpuntaje/'+data));
  }
  getTopScore(data){
        return this.http.get(this.basepath.concat('/getpuntajescore/'+data));
    }
}
