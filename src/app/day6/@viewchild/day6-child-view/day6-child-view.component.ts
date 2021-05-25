import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day6-child-view',
  templateUrl: './day6-child-view.component.html',
  styleUrls: ['./day6-child-view.component.scss']
})
export class Day6ChildViewComponent implements OnInit {
  fullName = "ankit kumar sharma";
  constructor() { }

  ngOnInit(): void {
  }

  onShow(){
    alert(this.fullName);
  }

}
