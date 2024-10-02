import { Component } from '@angular/core';

export interface User{
  name:string,
  surname:string,
  age:string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users:User [] = [];

  constructor() {
    this.users.push({
      name:"Samuel",
      surname:"Avella Perez",
      age:"19"
    })

    this.users.push({
      name:"Adrian",
      surname:"Barrios Marquez",
      age:"19"
    })
  }

}
