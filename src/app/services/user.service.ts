import { Injectable } from '@angular/core';
import {USERS } from '../data/user-data';
import { User} from '../models/user.models';

@Injectable()
export class UserService {

  constructor() { }

 public  getUsers(): Promise<User[] > {
  console.log(JSON.stringify(USERS));
    return Promise.resolve(USERS);
  }

}
