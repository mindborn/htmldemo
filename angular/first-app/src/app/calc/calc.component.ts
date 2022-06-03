import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  n1:number=0;
  n2:number=0;

  result:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  add(a:number, b:number)
  {
    console.log('Adding numbers');
    return a+b;
  }

  sub(a:number, b:number)
  {
    return a-b;
  }

  onAdd()
  {
    this.result=this.n1+this.n2;
  }

  onSub()
  {
    this.result=this.n1-this.n2;
  }



}
