import { User } from './user.models';

export class Ressource {
  constructor(
    public id: number,
    public nom: string,
    public prix: number,
    public type: string,
    public date: Date,
    utilisateur: User
  ) { }
}
