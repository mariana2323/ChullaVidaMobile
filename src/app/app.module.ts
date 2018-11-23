import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {JugadoresPage} from "../pages/jugadores/jugadores";
import {PuntajesPage} from "../pages/puntajes/puntajes";
import {RuletaPage} from "../pages/ruleta/ruleta";
import {IntroduccionRuletaPage} from "../pages/introduccion-ruleta/introduccion-ruleta";
import {HttpClientModule} from "@angular/common/http";
import { JugadorServiceProvider } from '../providers/jugador-service/jugador-service';
import { RuletaServiceProvider } from '../providers/ruleta-service/ruleta-service';
import { DadoServiceProvider } from '../providers/dado-service/dado-service';
import { DadosPage} from '../pages/dados/dados';
import {IntroduccionDadosPage} from "../pages/introduccion-dados/introduccion-dados";
import {IntroduccionCrtasPage} from "../pages/introduccion-crtas/introduccion-crtas";
import { CartasPage} from '../pages/cartas/cartas';
import { CartasServiceProvider } from '../providers/cartas-service/cartas-service';
import { ServicePuntajesProvider } from '../providers/puntajes-service/puntajes-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
      JugadoresPage,
      PuntajesPage,
      IntroduccionRuletaPage,
      RuletaPage,
      DadosPage,
      IntroduccionDadosPage,
      IntroduccionCrtasPage,
      CartasPage
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
      JugadoresPage,
      PuntajesPage,
      IntroduccionRuletaPage,
      RuletaPage,
      DadosPage,
      IntroduccionDadosPage,
      IntroduccionCrtasPage,
      CartasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JugadorServiceProvider,
    RuletaServiceProvider,
    DadoServiceProvider,
    CartasServiceProvider,
    ServicePuntajesProvider
  ]
})
export class AppModule {}
