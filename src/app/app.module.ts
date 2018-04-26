import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Built in modules **/
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


/** Components **/
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';


/** Services **/
import { RestApiService } from './services/rest-api.service';
import { LoginAuthService } from './services/login-auth.service';


/** Routes **/
const routes: Routes =[
  { path: 'users', component: UsersComponent, children: [
    { path: '', component: UsersListComponent },
    { path: 'create', component: CreateUserComponent },
    { path: 'login', component: LoginComponent },
    { path: ':id', component: SingleUserComponent },
    { path: 'edit/:id', component: EditUserComponent }
  ] },
  { path: '*', component: UsersComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    UsersListComponent,
    SingleUserComponent,
    EditUserComponent,
    CreateUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RestApiService,
    LoginAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
