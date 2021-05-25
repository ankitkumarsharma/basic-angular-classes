import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-day6-parent-output',
  templateUrl: './day6-parent-output.component.html',
  styleUrls: ['./day6-parent-output.component.scss']
})
export class Day6ParentOutputComponent implements OnInit {
  @Output() dataAdd = new EventEmitter();
  name:string = "ankit kumar Sharma";
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.dataAdd.emit(this.name);
  }
}
