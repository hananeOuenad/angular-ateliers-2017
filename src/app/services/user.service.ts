import { Injectable } from '@angular/core';
// import {USERS } from '../data/user-data';
import { User} from '../models/user.models';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

private url= 'https://ateliers-angular-2017.herokuapp.com/users';
  constructor(private http: HttpClient) { }

 public  getUsers(): Observable <User[] > {

    return this.http.get<User[]>(this.url);
  }

}
