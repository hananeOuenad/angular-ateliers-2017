import { Component, OnInit } from '@angular/core';
import { Ressource } from '../../models/ressource';

@Component({
  selector: 'app-ressource-details',
  templateUrl: './ressource-details.component.html',
  styleUrls: ['./ressource-details.component.css']
})
export class RessourceDetailsComponent implements OnInit {
  private res: Ressource= new Ressource(
 1, 'Alienware',  25000, 'PC', new Date(2016, 8, 2), null
  );

  constructor() { }

  ngOnInit() {
  }

}
