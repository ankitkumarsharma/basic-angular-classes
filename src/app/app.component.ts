import { listArr } from './core/app.models';
import { IMAGE_URL, ARRAY_SAMPLE } from './core/app.constant';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fullInfo:User = {
    name: 'aaaa',
    age: 23,
    city: 'ghjk',
  }
  show:boolean = true;
  arr = ARRAY_SAMPLE;
  para_no = 20;
}
export interface User {
  name: string,
  age: number,
  city: string
}
