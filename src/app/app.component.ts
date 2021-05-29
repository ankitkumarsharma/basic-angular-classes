import { listArr } from './core/app.models';
import { IMAGE_URL, ARRAY_SAMPLE } from './core/app.constant';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fullInfo:User = {
    name: 'aaaa',
    age: 23,
    city: 'ghjk',
  }
  show:boolean = true;
  arr = ARRAY_SAMPLE;
  para_no = 20;
  loginFlag:boolean = false;
  constructor(private route:Router){
    
  }
  ngOnInit(){
    if(sessionStorage.getItem('user') =='true'){
      this.loginFlag = true;
    } else{
      this.loginFlag = false;
    }
  }
  onSignout(){
    sessionStorage.removeItem('user');
    this.route.navigate(['/']);
  }
}
export interface User {
  name: string,
  age: number,
  city: string
}
