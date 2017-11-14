import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [];

  constructor(private _userService: UserService, private http: HttpClient) { }

  ngOnInit() {
      this._userService.getUsers().subscribe((users) => {
          this.users = users;
      });
  }

  create(user: User) {
      this.http.post('http://laravel-api-angular4.dev/customers', user).subscribe(
          res => {
              this.users.push(user);
          },
          err => {
              console.log('Error occured');
          }
      );
  }

  update(users: any) {
      const i = this.users.indexOf(users.original);
      this.http.put('http://laravel-api-angular4.dev/customers/' + this.users[i]['id'], this.users[i]).subscribe(
          (res) => {
              this.users[i] = users.edited;
          },
          (err) => {
              console.log('Error occured');
          }
      );
  }

  destroy(user: User) {
      const i = this.users.indexOf(user);
      this.http.delete('http://laravel-api-angular4.dev/customers/' + this.users[i]['id']).subscribe(
          (res) => {
              this.users.splice(i, 1);
          },
          (err) => {
              console.log('Error occured');
          }
      );
  }

    getUsers() {
        // this._userService.getUsers()
        //     .then(users => this.users = users);
    }

}
