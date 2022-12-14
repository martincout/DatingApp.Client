import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  api = 'https://localhost:5001/api/';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService){}
  ngOnInit() {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem("user")!);
    this.accountService.setCurrentUserSource(user);
  }

  getUsers(){
    this.http.get(this.api + 'users').subscribe({
      next: users => {this.users = users},
      error: error => {console.log(error)},
    })
  }

}
