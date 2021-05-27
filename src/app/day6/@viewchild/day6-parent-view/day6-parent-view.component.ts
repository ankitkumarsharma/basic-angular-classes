import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
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
  routeObj:any;
  routeId:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.fullName = this.name.fullName;
    this.route.data.subscribe((item)=>{
      this.routeObj = item;
    }); 
    this.routeId = this.route.snapshot.params;
  }

  ngAfterViewInit(){
    console.log(this.textInput.nativeElement.value)
  }
}
