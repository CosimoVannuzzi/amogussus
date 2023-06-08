import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  showFiller = false;
  mostra: boolean;
  visibile: boolean;
  Lista = [];

  constructor () {
    this.mostra = false;
    this.visibile = false;
  }

  onClickMostra():void{
    this.mostra = !this.mostra;
  }

  onClickVisibile():void {
    this.visibile = true;

  }

}
