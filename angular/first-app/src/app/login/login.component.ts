import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string='user1';
  password:string='pass1';
  message='Hello World';

  constructor() { }

  ngOnInit(): void {
  }

}
