import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../common/person';
import { PersonListComponent } from '../person-list/person-list.component';
import { PersonService } from '../service/person-service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Input() theId = 0;

  currentPersonId!: number;

  tempPerson!: Person;

  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentPersonId = +this.route.snapshot.paramMap.get("id")!;
    }
    else {
      // not category id available ... default to category id 1
      this.currentPersonId = 1;
    }

    if (this.theId != 0) {
      this.currentPersonId = this.theId;
    }

    this.tempPerson = this.personService.getPersonById(this.currentPersonId);



  }

}
