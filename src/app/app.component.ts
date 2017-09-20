import { PeopleService } from './people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  peopleList: Object[];
  checkedPeople: Array<string> = new Array<string>();
  currentPage = 1;

  constructor(private peopleService: PeopleService) {
    this.loadPeople();
  }
  ngOnInit(): void {}

  prev() {
    if (this.currentPage !== 1) {
      this.currentPage--;
      this.loadPeople(this.currentPage);
    }
  }

  next() {
    this.currentPage++;
    this.loadPeople(this.currentPage);
  }

  loadPeople(page: number = 1) {
    this.peopleService
      .getPeople(page)
      .subscribe(res => (this.peopleList = res));
  }

  check(e: string, event: Event) {
    this.checkedPeople = event.target['checked'] ? [...this.checkedPeople, e] : this.checkedPeople.filter(x => x !== e);
    console.log(this.checkedPeople);
  }

  isChecked(name: string) {
    console.log('check check');
    return this.checkedPeople.includes(name);
  }
}
