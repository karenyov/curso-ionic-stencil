import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ActionSheetOptions } from 'ionic-angular';

/**
 * Generated class for the ActionSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  apresentarActionSheet = () => {
    let actionSheetOpts: ActionSheetOptions = {
      title: "Opções",
      subTitle: "Opções do usuário",
      enableBackdropDismiss: false,
      buttons: [
        {
          text: "Excluir",
          icon: "trash",
          role: "destructive"
        },
        {
          text: 'Cancelar',
          role: "cancel"
        },
        {
          text: "Editar",
          icon: "create",
          handler: () => {
            console.log("clicou em editar");
          }
        }
      ]
    }
    actionSheetOpts.buttons = [...actionSheetOpts.buttons, {
      text: "Compartilhar",
      icon: "share",
      handler: () => {
        console.log("compartilhou");
        return false;
      }
    }];

    const actionSheet = this.actionSheetCtrl.create(actionSheetOpts);
    actionSheet.present();

    setTimeout(()=> actionSheet.dismiss(), 35000);
  }

}
