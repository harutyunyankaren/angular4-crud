import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {
    @Input() users;
    @Output() destroyUserEvent = new EventEmitter();
    @Output() updateUserEvent = new EventEmitter();

    constructor(private _userService: UserService, private http: HttpClient) { }

    ngOnInit() {
        this._userService.getUsers().subscribe((users) => {
            this.users = users;
        });
    }

  destroy(user: User) {
    this.destroyUserEvent.emit(user);
  }

  update(users) {
    this.updateUserEvent.emit(users);
  }

}
