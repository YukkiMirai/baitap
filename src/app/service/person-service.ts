import { Injectable } from "@angular/core";
import { Person } from "../common/person";

@Injectable({
  providedIn: "root",
})

export class PersonService {
  persons: Person[] = [
    {
      "id": 1,
      firstName: "Asuna",
      lastName: "Yuuki",
      age: 16,
      email: "yukki@gmail.com",
    },
    {
      "id": 2,
      firstName: "Asuna2",
      lastName: "Yuuki2",
      age: 19,
      email: "yukki@gmail.com2",
    },
    {
      "id": 3,
      firstName: "Asuna3",
      lastName: "Yuuki3",
      age: 17,
      email: "yukki@gmail.com3",
    },
    {
      "id": 4,
      firstName: "Asuna4",
      lastName: "Yuuki4",
      age: 17,
      email: "yukki@gmail.com4",
    },
    {
      "id": 5,
      firstName: "Asuna5",
      lastName: "Yuuki5",
      age: 20,
      email: "yukki@gmail.com5",
    },
  ]

  getPersonList(): Person[] {
    return this.persons;
  }

  getPersonById(theId: number): Person {

    for (let index = 0; index < this.persons.length; index++) {
      const element = this.persons[index];
      if (element.id == theId) {
        return element;
      }
    }
    return this.persons[0];
  }
}
