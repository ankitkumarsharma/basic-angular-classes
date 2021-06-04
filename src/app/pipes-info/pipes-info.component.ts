import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-info',
  templateUrl: './pipes-info.component.html',
  styleUrls: ['./pipes-info.component.scss']
})
export class PipesInfoComponent implements OnInit {
  data:any = "123456";
  date = new Date();
  obj:any = {
    name: 'ankit',
    age: 29,
    city: 'meerut'
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.date.getHours())
  }

}
