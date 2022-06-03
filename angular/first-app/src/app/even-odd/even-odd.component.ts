import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.scss']
})
export class EvenOddComponent implements OnInit {

  n:number=0;

  list=['cd', 'dvd', 'bluray'];

  name:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onAddElement()
  {
    this.list.push(this.name);
    this.name='';
  }

}
