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
public getUsers(): void {
this.userSerice.getUsers().then(users => this.users = users);
}
  ngOnInit(): void {
 this.getUsers();
  }
}
