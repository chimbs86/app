import { Component } from '@angular/core';
import {cards} from "./cards";
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'story',
  templateUrl: 'story.html'
})
export class story {
  public myName: String;
  list:Array<cards> = [];
  constructor(public alertCtrl: AlertController, public  actionSheetCtrl : ActionSheetController) {
    this.myName = "Gaurav Raje";


  }
   onTap(){
     let card:cards = new cards("assets/icon/lion.jpeg","My first chimbs","Chimbs rocks");
     this.list.push(card);

  }
  menu(){
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }


  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
