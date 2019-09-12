import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Angular 5+
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Angular 2 - 4
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav: NavController;
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public events: Events, public http: HttpClient, public httpConvencional: Http) {

    /**
     * .is('nomePlataforma') retorna um booleano se for a plataforma passada no parametro.
     */
    console.log(platform.is('ios'));

    /**
     * Retorna um booleano de acordo com a posição do aparelho do usuário
     * landscape = horizontal
     * portrait = vertical
     */
    console.log('isLandscape', platform.isLandscape());
    console.log('isPortrait', platform.isPortrait());

    /**
     * pause = é executado quando o app perde o foco
     */
    platform.pause.subscribe(ev => {
      console.log('pause', ev);
    });

    /**
     * resume é executado quando o app volta a ser o foco
     */
    platform.resume.subscribe(ev => {
      console.log('resume', ev);
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      /**
       * Assinando um evento chamado user:login 
       */
      events.subscribe('user:login', ev => {
        console.log('evento', ev);
      });

      /**
      * Chamada HTTP utilizando HttpClient
      */
      let headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      this.http.get('https://jsonplaceholder.typicode.com/posts/1', { headers })
        .subscribe(data => console.log('resposta HttpClient', data),
          error => console.log('error HttpClient', error));

      /**
       * chamada HTPP com Http convencional
       */
      let headers2: Headers = new Headers({
        'Content-Type': 'application/json'
      });
      const options: RequestOptions = new RequestOptions({
        headers: headers2
      });
      this.httpConvencional.get('https://jsonplaceholder.typicode.com/posts/1').map(data => data.json())
        .subscribe(data => console.log('resposta Http Convencional', data), error => console.log('error Http Convencional', error));

    });

    /**
     * Sobrescreve o comportamento do botão físico de voltar do Android
     */
    platform.registerBackButtonAction(ev => {
      if (this.nav.canGoBack()) this.nav.pop();
      else platform.exitApp();
      //exitApp fecha a aplicação
    });
  }
}

