import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../../services/rest-api.service';


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private rest_api: RestApiService
  ) { }


  success_message: String ="";
  error_message: String ="";

  ngOnInit() {

    this.rest_api.userCreated$.subscribe(user => {
      this.success_message =`${user.first_name} Created Successfully`;
      this.clearMessages();
    });

    this.rest_api.userDeleted$.subscribe(user => {
      this.error_message ='User Deleted';
      this.clearMessages();
    });

  }

  clearMessages(){

    setTimeout(() => {
      this.error_message ="";
      this.success_message ="";
    }, 5000);

  }

  

}
