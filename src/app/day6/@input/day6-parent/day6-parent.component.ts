import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day6-parent',
  templateUrl: './day6-parent.component.html',
  styleUrls: ['./day6-parent.component.scss']
})
export class Day6ParentComponent implements OnInit {
  name:string = "Ankit Kumar Sharma";
  arr = [2,3,4,5,6];
  constructor() { }

  ngOnInit(): void {
  }

}
