import { UserinfoService } from './../userinfo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string='';
  password:string='';
  message='';

  constructor(private router: Router,
      private userinfo: UserinfoService
    ) { }

  ngOnInit(): void {
  }

  onCalc()
  {
  }

  onLogin()
  {
    if(this.username==='abcd' && this.password==='efgh')
    {
      this.userinfo.username=this.username;
      this.router.navigateByUrl("/calculator");
    }
    else
    {
      this.message="Incorrect username or password";
    }
  }

}
