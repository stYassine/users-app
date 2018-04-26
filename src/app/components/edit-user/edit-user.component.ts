import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { RestApiService } from '../../services/rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private rest_api: RestApiService
  ) { }

  user: User ={
    first_name: '',
    last_name: '',
    avatar: ''
  };

  ngOnInit() {
    
    let user_id =this.route.snapshot.params['id'];

    this.rest_api.getSingleUser(user_id).subscribe(user => this.user =user);

  }

  editUser(){
    delete this.user.avatar;
    console.log(this.user);
    this.rest_api.editUser(this.user).subscribe(user => console.log(user));
  }

  

}
