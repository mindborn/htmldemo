import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  users:any;

  constructor(private httpClient:HttpClient) {

   }

  ngOnInit(): void {

    this.httpClient.get("http://localhost:8000/getallusers").subscribe((res)=>{
      console.log(res);
      this.users=res;
    });

  }

}
