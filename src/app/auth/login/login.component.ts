import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username!:ElementRef<any>;
  @ViewChild('password') password!:ElementRef<any>;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.username.nativeElement.value == 'ankit' && this.password.nativeElement.value == 'ankit'){
      sessionStorage.setItem('user','true');
      this.route.navigate(['/day']);
    } else {
      this.route.navigate(['/']);
    }
  }
}
