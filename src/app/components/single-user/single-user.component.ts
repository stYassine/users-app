import { Component, OnInit } from '@angular/core';


import { User } from '../../models/user';
import { RestApiService } from '../../services/rest-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private rest_api: RestApiService
  ) { }

  user: User;

  ngOnInit() {
    
    let user_id =this.route.snapshot.params['id'];

    this.rest_api.getSingleUser(user_id).subscribe(user => this.user = user);

  }

}
