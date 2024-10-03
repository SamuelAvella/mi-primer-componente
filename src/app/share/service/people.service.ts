import { Injectable } from '@angular/core';
import { Person } from '../interface/person';
import { Crud } from '../interface/crud';

@Injectable({
  providedIn: 'root'
})
export class PeopleService implements Crud<Person>{

  private _people: Person[] =[]

  constructor() { }

  add(element: Person): Person | null {
    try {
      this._people.push(element)
      return element
    } catch (error) {
      return null
    }
  }

  remove(element: Person): Person | null {
    try {
      let idx = this._people.findIndex(p => p.id === element.id);
      if (idx !== -1) {
        let person = this._people[idx];
        this._people.splice(idx, 1); 
        return person; 
      }
      return null;
    } catch (error) {
      return null; 
    }
  }

  update(element: Person): Person | null {
    try {
      let idx = this._people.findIndex(p => p.id == element.id)
      let person = this._people[idx]
      this._people[idx] = element
      return person
    } catch (error) {
      return null;
    }
  }

  getAll(): Person[] {
    return this._people;
  }

  get(id: string): Person | null {
    try{
      const person: Person|undefined = this._people.find(p => p.id == id);
      return person?person:null;
    } catch(error){
      return null
    }
  }

}
