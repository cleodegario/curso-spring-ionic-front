import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuControler: MenuController) {

  }

  ionViewWillEnter(){
    this.menuControler.close();
    this.menuControler.swipeEnable(false);
  }

  login(){
    this.navCtrl.setRoot('CategoriasPage');
  }

  ionViewDidLeave(){
    this.menuControler.swipeEnable(true);
  }

}
