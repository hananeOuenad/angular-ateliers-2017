import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.models';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  constructor(private route: ActivatedRoute,
private userService: UserService,
private location: Location) { }
retour(): void {
  this.location.back();
 }
getUser() {
  const id = +this.route.snapshot.paramMap.get('numero');
 this.userService.getUser(id).subscribe(
 u => this.user = u
 ); }

 enregistrer() {
   this.userService.modifier(this.user).subscribe(
   () => this.retour()
   );
 }


  ngOnInit() {
    this.getUser();
  }

}
