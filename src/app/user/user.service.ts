import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  create(user: User) {
    // return this.http.post('http://laravel-api-angular4.dev/customers', user)
    //     .map(data => data.json()).toPromise();
  }

  // destroy(user: User) {
  //     return this.http.delete('/users' + user.id)
  //         .map(data => data.json()).toPromise();
  // }
  //
  // update(user: User) {
  //     return this.http.post('/users' + user.id, user)
  //         .map(data => data.json()).toPromise();
  // }

  getUsers() {
      return this.http.get('http://laravel-api-angular4.dev/customers')
          .map(res => res.json());
  }

  // getUser(user: User) {
  //     return this.http.get('/users' + user.id)
  //         .map(data => data.json()).toPromise();
  // }

}
