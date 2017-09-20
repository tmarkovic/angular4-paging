import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class PeopleService {
  constructor(private http: Http) {}

  getPeople(page: number = 1) {
    return this.http
      .get(`https://swapi.co/api/people/?page=${page}&format=json`)
      .map(res => res.json().results);
  }
}
