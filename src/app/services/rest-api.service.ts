import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';


import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class RestApiService {

  constructor(
    private http: Http
  ) { }

  BASE_URL ='https://reqres.in/api/users';
  header =new Headers();

  

  loadToken(){
    const token =localStorage.getItem('auth');
    this.header.append('Content-Type', 'Application/json');
    this.header.append('Authorization', `Bearer ${token}`);

  }

  /// source
  private userCreatedSource =new Subject<User>();
  private userDeletedSource =new Subject();
  
  /// stream
  userCreated$ =this.userCreatedSource.asObservable();
  userDeleted$ =this.userDeletedSource.asObservable();



  /// get all users
  getUsers(): Observable<User[]>{
    return this.http.get(this.BASE_URL)
          .map(res => res.json().data)
          .catch(this.handleError);
  }

  /// get single user
  getSingleUser(user_id): Observable<User>{
    return this.http.get(this.BASE_URL+'/'+user_id)
          .map(res => res.json().data)
          .catch(this.handleError);
  }
  
  /// create user
  createUser(user: User): Observable<User>{

    this.loadToken();

    return this.http.post(this.BASE_URL, user, {headers: this.header})
          .map(res => res.json())
          .do(user => this.userCreated(user))
          .catch(this.handleError);
  }
  
  /// edit user
  editUser(user: User): Observable<User>{

    this.loadToken();

    return this.http.put(this.BASE_URL+'/'+user.id, user, {headers: this.header})
          .map(res => res.json())
          .catch(this.handleError);
  }
  
  /// remove user
  removeUser(user: User): Observable<User>{

    this.loadToken();

    return this.http.delete(this.BASE_URL+'/'+user.id, {headers: this.header})
          .map(res => res.json())
          .catch(this.handleError);
  }
  
  /// handle error
  handleError(response: Response): Observable<any>{
    let err_message =`${response.status} - ${response.statusText}`;

    return Observable.throw(err_message);

  }

  /// user created
  userCreated(user: User){
    this.userCreatedSource.next(user);
  }

  /// user remove
  userRemoved(user: User){
    this.userDeletedSource.next(user);
  }




}
