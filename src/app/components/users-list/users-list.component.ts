import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { Http } from '@angular/http';
import { } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(
    private rest_api: RestApiService
  ) { }

  users: User[];

  ngOnInit() {
    this.rest_api.getUsers().subscribe(users => this.users =users);
  }

}
