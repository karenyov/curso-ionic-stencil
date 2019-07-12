import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, AlertOptions } from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  mostrarAlertaBasico = () => {
    const alertaBasicoOpts: AlertOptions = {
      title: "Bem vindo ao Ionic",
      subTitle: "Espero que esteja gostando.",
      message: "Ionic framework versão 3.x",
      buttons: [{
        role: "cancel",
        text: "Obrigado",
        handler: () => console.log('clicou em obrigado')
      }],
      enableBackdropDismiss: false
    }

    const alertaBasico = this.alertCtrl.create(alertaBasicoOpts);
    alertaBasico.present();
  }

  mostrarAlertPrompt = () => {
    const alertaPrompt = this.alertCtrl.create({
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Digite um nome',
          label: 'nome'
        }, {
          name: 'senha',
          type: 'password',
          placeholder: 'Digite sua senha'
        },
        {
          type: 'email',
          min: 10,
          name: 'email'
        }
      ],
      title: 'Me diga o seu nome',
      buttons: [
        {
          text: 'Confirmar',
          handler: data => {
            console.log(data);
            return false;
          }
        }
      ]
    });
    alertaPrompt.present();
  }

  mostrarAlertaConfirm = () => {
    const confirmAlerta = this.alertCtrl.create({
      title: 'Deseja realmente sair?',
      subTitle: 'Você irá perder todas as informações.',
      buttons: [
        {
          role: 'cancel',
          text: 'Não'
        },
        {
          text: 'Sim',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirmAlerta.present();
  }

  mostrarAlertaRadio = () => {
    const radioAlerta = this.alertCtrl.create({
      title: "Escolha uma cor",
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });
    radioAlerta.addInput({
      checked: true,
      label: 'Azul',
      value: 'Azul',
      type: 'radio'
    });
    radioAlerta.addInput({
      label: 'Vermelho',
      value: 'Vermelho',
      type: 'radio'
    });
    radioAlerta.addInput({
      label: 'Verde',
      value: 'Verde',
      type: 'radio'
    });
    radioAlerta.present();
  }

  mostrarAlertaCheckbox = () => {
    const checkboxAlert = this.alertCtrl.create({
      title: 'Quais você já jogou?',
      inputs: [
        {
          type: 'checkbox',
          label: 'Final Fantasy X',
          value: 'finalFantasyX'
        },
        {
          type: 'checkbox',
          label: 'Final Fantasy VII',
          value: 'finalFantasyVII'
        },
        {
          type: 'checkbox',
          label: 'Final Fantasy VIII',
          value: 'finalFantasyVIII'
        }
      ]
    });

    checkboxAlert.addButton({
      text: 'Confirmar',
      handler: data => console.log(data)
    });

    checkboxAlert.addButton({
      text: 'Cancelar',
      role: 'cancel'
    });

    checkboxAlert.present();
  }

}
