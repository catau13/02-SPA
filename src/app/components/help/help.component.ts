import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {

  flag = false;

  changeState(){
    this.flag = !this.flag;
    console.log(this.flag);
  }
}
