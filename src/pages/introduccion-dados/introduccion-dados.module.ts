import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroduccionDadosPage } from './introduccion-dados';

@NgModule({
  declarations: [
    IntroduccionDadosPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroduccionDadosPage),
  ],
})
export class IntroduccionDadosPageModule {}
