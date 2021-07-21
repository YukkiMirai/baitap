import { Component, Input, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Person } from '../common/person';
import { PersonService } from '../service/person-service';

@Component({
  selector: 'app-person-detail-modal',
  templateUrl: './person-detail-modal.component.html',
  styleUrls: ['./person-detail-modal.component.css']
})
export class PersonDetailModalComponent implements OnInit {

  @Input() theId = 0;

  tempPerson!: Person;

  closeResult = '';
  constructor(private modalService: NgbModal, private personService: PersonService) { }

  ngOnInit(): void {
    this.tempPerson = this.personService.getPersonById(this.theId);
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
