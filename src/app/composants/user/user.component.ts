import { Component , OnInit } from '@angular/core';
import { User } from '../../models/user.models';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {
    'nom': 'Angular',
    'numero': 5
  };
  users: User[] ;

  constructor(private userSerice: UserService) {
  }
  public ajouter(nom: string ): void {
    const u = new User();
    u.nom = nom;
    this.userSerice.ajouter(u)
    .subscribe(user => this.users.push(user));
  }

  public supprimer(user: User): void {
    this.users = this.users.filter(u => u !== user );
    this.userSerice.supprimer(user.numero).subscribe();
  }

public getUsers(): void {
this.userSerice.getUsers().subscribe
(users => this.users = users);
}
  ngOnInit(): void {
 this.getUsers();
  }
}
