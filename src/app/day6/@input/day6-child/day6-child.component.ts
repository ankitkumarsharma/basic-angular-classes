import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day6-child',
  templateUrl: './day6-child.component.html',
  styleUrls: ['./day6-child.component.scss']
})
export class Day6ChildComponent implements OnInit {
  @Input() name!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
