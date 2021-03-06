import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
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
import {MenuPuntajesPage} from "../pages/menu-puntajes/menu-puntajes";
import {PuntajesDadosPage} from "../pages/puntajes-dados/puntajes-dados";
import {PuntajeCartasPage} from "../pages/puntaje-cartas/puntaje-cartas";
import {CartaJugadorPage} from "../pages/carta-jugador/carta-jugador";
import {DadoJugadorPage} from "../pages/dado-jugador/dado-jugador";
import {InicioPage} from "../pages/inicio/inicio";
@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
      AboutPage,
      JugadoresPage,
      PuntajesPage,
      IntroduccionRuletaPage,
      RuletaPage,
      DadosPage,
      InicioPage,
      IntroduccionDadosPage,
      IntroduccionCrtasPage,
      CartasPage,
      CartaJugadorPage,
      DadoJugadorPage,
      MenuPuntajesPage,
      PuntajesDadosPage,
      PuntajeCartasPage
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
      AboutPage,
      JugadoresPage,
      PuntajesPage,
      IntroduccionRuletaPage,
      RuletaPage,
      DadosPage,
      InicioPage,
      IntroduccionDadosPage,
      IntroduccionCrtasPage,
      CartasPage,
      CartaJugadorPage,
      DadoJugadorPage,
      MenuPuntajesPage,
      PuntajesDadosPage,
      PuntajeCartasPage
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
