import { Component, OnInit } from '@angular/core';
import { observable, Observable, of as observableOf } from 'rxjs';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe({
      next: res => {console.log(res)},
      error: err => {console.log(err)},
    })
  }

  logout(){
    this.accountService.logout();
  }


}
