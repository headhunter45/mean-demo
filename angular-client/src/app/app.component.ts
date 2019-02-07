import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

class User {
  public name: string;
  public age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of people
  people: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getAllPeople();
  }

  // Add one person to the API
  addPerson(name, age) {
    this.httpClient.post(`${this.API}/users`, {name, age})
      .subscribe(() => {
        this.getAllPeople();
      });
  }

  // Get all users from the API
  getAllPeople() {
    this.httpClient.get<User[]>(`${this.API}/users`)
    .subscribe((people) => {
      console.dir(people);
      this.people = people;
    });
  }
}
