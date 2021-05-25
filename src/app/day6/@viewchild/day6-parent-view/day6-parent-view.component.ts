import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'; 
import { Day6ChildViewComponent } from '../day6-child-view/day6-child-view.component';

@Component({
  selector: 'app-day6-parent-view',
  templateUrl: './day6-parent-view.component.html',
  styleUrls: ['./day6-parent-view.component.scss']
})
export class Day6ParentViewComponent implements OnInit,AfterViewInit {
  @ViewChild(Day6ChildViewComponent, {static: true}) name!: Day6ChildViewComponent;
  fullName:any;
  @ViewChild('text') textInput!:ElementRef<any>;
  constructor() { }

  ngOnInit(): void {
    this.fullName = this.name.fullName;
    
  }
  ngAfterViewInit(){
    console.log(this.textInput.nativeElement.value)
  }
}
