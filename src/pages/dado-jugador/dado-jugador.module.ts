import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadoJugadorPage } from './dado-jugador';

@NgModule({
  declarations: [
    DadoJugadorPage,
  ],
  imports: [
    IonicPageModule.forChild(DadoJugadorPage),
  ],
  exports:[
      DadoJugadorPage
  ]
})
export class DadoJugadorPageModule {}

