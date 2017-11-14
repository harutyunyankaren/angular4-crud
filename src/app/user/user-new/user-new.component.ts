import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserNewComponent implements OnInit {
  newUser = new User();
  @Output() createNewUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  create() {
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();
  }

}
