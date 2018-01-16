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

// private urlSpring= 'https://ateliers-angular-2017.herokuapp.com/users';
private url= 'https://ateliers-2017-expjs-rest-api.herokuapp.com/users'  ;
constructor(private http: HttpClient) { }
// ajout
public ajouter (user: User): Observable<User> {
  if (!user.nom) {return; }
 return this.http.post<User>(this.url, user, httpOptions);
}
// getUser (numero)
getUser (id: number): Observable<User> {
  return this.http.get<User>(`${this.url}/${id}`);
}
// Suppression
supprimer(id: number): Observable<User> {
  return this.http.delete<User>(`${this.url}/${id}`, httpOptions);

}

// Modification
public modifier(u: User): Observable<User>{
  return this.http.put<User>( this.url, u, httpOptions);
}

 public  getUsers(): Observable <User[] > {

    return this.http.get<User[]>(this.url);
  }

}
