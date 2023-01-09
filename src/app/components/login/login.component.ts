import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-login',
  template: `
  <a>
    <span *ngIf="needsLogin">Login</span>
    <span *ngIf="!needsLogin">Logout</span>
  </a>
`
})
export class LoginComponent  {

  needsLogin: boolean = true;


   constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.isAuthenticated().then((authenticated:any) => {
      this.needsLogin = !authenticated;
    })
  }

}
