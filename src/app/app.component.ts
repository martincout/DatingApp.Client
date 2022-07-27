import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  api = 'https://localhost:5001/api/';
  users: any;

  constructor(private http: HttpClient){}
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get(this.api + 'users').subscribe({
      next: users => {this.users = users},
      error: error => {console.log(error)},
    })
  }

}
