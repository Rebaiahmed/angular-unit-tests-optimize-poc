import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { User } from '../user';



@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  username='';
  age=0;
  userid=0;

  @Input('selUser') set setUser(user: User) {

    if(user!==null && user!==undefined){

      this.username = user.name;
      this.userid = user.id;
      this.age = user.age;
    }

  }

  @Output() updateUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {

  }

  saveUser(){
    let userDetail = new User();

    userDetail.name= this.username;
    userDetail.age = this.age;
    userDetail.id = this.userid;

    this.updateUser.emit(userDetail);

    this.username = '';
    this.userid = 1;
    this.age = 1;

  }

}
