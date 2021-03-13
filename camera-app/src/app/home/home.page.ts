import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController) {}


//  code to enable the menu
  homeMenu()
  {
    this.menu.enable(true, '1');
    this.menu.open('1');
  }

}
