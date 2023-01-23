import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-14-crud-example';
  messageSuccess:boolean;

  showMessageSuccess(){
    let that = this;
    this.messageSuccess = true;
    setTimeout(function(){
      that.messageSuccess = false;
    },3000);

  }
}
