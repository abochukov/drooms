import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get('http://api.github.com/users');
  }

  getUserById(id): Observable<any> {
    return this.http.get(`http://api.github.com/users/${id}`);
  }

}
