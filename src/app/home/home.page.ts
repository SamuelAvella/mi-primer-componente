import { Component } from '@angular/core';
import { IonInput } from '@ionic/angular';

export interface User{
  name:string,
  surname:string,
  age:number
}

export interface PersonCard extends User{
  isFav:boolean
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
      age:19
    })

    this.users.push({
      name:"Adrian",
      surname:"Barrios Marquez",
      age:19
    })

    this.users.push({
      name:"Ivan",
      surname:"Caro Romero",
      age:19
    })
  }
  async onSubmit(nameInput: IonInput, surnameInput: IonInput, ageInput: IonInput) {
  const nameElement = await nameInput.getInputElement();
  const surnameElement = await surnameInput.getInputElement();
  const ageElement = await ageInput.getInputElement();

  const userName = nameElement.value;
  const userSurname = surnameElement.value;
  const userAge = Number(ageElement.value);

  if (userName && userSurname && !isNaN(userAge) && userAge >= 0 && userAge <= 120) {
    this.users.push({
      name: userName,
      surname: userSurname,
      age: userAge
    });

    nameInput.value = '';
    surnameInput.value = '';
    ageInput.value = '';
  } else {
    console.error("Por favor, completa todos los campos correctamente.");
  }
}

}
