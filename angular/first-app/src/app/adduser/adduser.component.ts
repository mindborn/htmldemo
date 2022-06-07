import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit
{

  user =
    {
      username: '',
      password: ''
    };

  cpassword = '';
  message = '';

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void
  {
  }

  onAddUser()
  {
    this.httpClient.post("http://localhost:8000/adduser", this.user).subscribe((res: any) =>
    {
      this.message = res.message;
      if (res.status === 'success')
      {
        this.router.navigateByUrl("/userlist");
      }
    });
  }

}
