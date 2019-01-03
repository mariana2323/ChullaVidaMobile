import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartaJugadorPage } from './carta-jugador';

@NgModule({
  declarations: [
    CartaJugadorPage,
  ],
  imports: [
    IonicPageModule.forChild(CartaJugadorPage),
  ],
})
export class CartaJugadorPageModule {}
