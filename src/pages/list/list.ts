import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {ItemDetailsPage} from "../item-details/item-details";
import {listitem} from "../listitem";
import {infodir} from "../infodir";
import {thomson} from "../thomson";


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, desc: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    // for(let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
    this.pushitem(new infodir());
    this.pushitem(new thomson());


  }

  pushitem(item: listitem) {
    this.items.push({
      title: item.title,
      note: item.note,
      icon: this.icons[Math.floor(Math.random() * this.icons.length)],
      desc: item.desc
    })
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
