import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-day6-child-output',
  templateUrl: './day6-child-output.component.html',
  styleUrls: ['./day6-child-output.component.scss']
})
export class Day6ChildOutputComponent implements OnInit {
  FullName:any;
  constructor() { }

  ngOnInit(): void {
  }
  addData(e:any){
    this.FullName = e;
  }
}
