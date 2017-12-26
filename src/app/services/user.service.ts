import { Injectable } from '@angular/core';
// import {USERS } from '../data/user-data';
import { User} from '../models/user.models';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers:
   new HttpHeaders({'Content-type': 'application/json'})
};
@Injectable()
export class UserService {

private url= 'https://ateliers-angular-2017.herokuapp.com/users';
  constructor(private http: HttpClient) { }
// ajout
public ajouter (user: User): Observable<User> {
  if (!user.nom) {return; }
 return this.http.post<User>(this.url, user, httpOptions);
}

// Suppression
supprimer(id: number): Observable<User> {
  return this.http.delete<User>(`${this.url}/${id}`, httpOptions);

}

 public  getUsers(): Observable <User[] > {

    return this.http.get<User[]>(this.url);
  }

}
