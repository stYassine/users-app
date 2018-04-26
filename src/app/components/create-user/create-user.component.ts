import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private rest_api: RestApiService
  ) { }

  user: User ={
    first_name: '',
    last_name: '',
    avatar: ''
  };

  ngOnInit() {
  }

  createUser(){
    this.rest_api.createUser(this.user).subscribe(user => console.log(user));
  }

}
