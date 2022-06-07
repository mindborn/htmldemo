import { UserinfoService } from './../userinfo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
      private userinfo: UserinfoService,
      private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
  }

  onCalc()
  {
  }

  onLogin()
  {

    this.httpClient.post("http://localhost:8000/login",{username: this.username, password: this.password}).subscribe((res:any)=>{
      console.log(res);
      if(res.status==='success')
      {
        this.message='Login successful';
        this.router.navigateByUrl("/userlist");
      }
      else
      {
        this.message=res.message;
      }
    });


    // if(this.username==='abcd' && this.password==='efgh')
    // {
    //   this.userinfo.username=this.username;
    //   this.router.navigateByUrl("/calculator");
    // }
    // else
    // {
    //   this.message="Incorrect username or password";
    // }
  }

}
