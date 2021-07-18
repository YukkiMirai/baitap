import { Component, OnInit, } from '@angular/core';
import { Person } from '../common/person';
import { PersonService } from '../service/person-service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  id: number = 2;

  persons: Person[] = [];

  constructor(private personService: PersonService) { }


  ngOnInit(): void {
    this.persons = this.personService.getPersonList();

  }


}
