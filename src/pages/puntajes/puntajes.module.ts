import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PuntajesPage } from './puntajes';

@NgModule({
  declarations: [
    PuntajesPage,
  ],
  imports: [
    IonicPageModule.forChild(PuntajesPage),
  ],
})
export class PuntajesPageModule {}
