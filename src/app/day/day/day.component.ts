import { Component, OnDestroy, OnInit } from '@angular/core';
import { ARRAY_SAMPLE } from 'src/app/core/app.constant';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit, OnDestroy {
  fullInfo:User = {
    name: 'aaaa',
    age: 23,
    city: 'ghjk',
  }
  show:boolean = true;
  arr = ARRAY_SAMPLE;
  para_no = 20;
  changeValue:any;
  ngOnInit(){
    sessionStorage.setItem('name','ankit');
  }
  ngOnDestroy(){
    sessionStorage.removeItem("name");
  }
  onChange(e:any){
     this.changeValue = e.target.value;
  }
}
export interface User {
  name: string,
  age: number,
  city: string
}
