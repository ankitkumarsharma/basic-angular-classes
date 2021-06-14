import { ApiService } from './../_services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-based',
  templateUrl: './service-based.component.html',
  styleUrls: ['./service-based.component.scss']
})
export class ServiceBasedComponent implements OnInit {
  serviceData:any;
  dummyData:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.dummyData = this.apiService.add("u are learning with me....")
  }

  showData(){
    this.apiService.getData().subscribe((data)=>{
      this.serviceData = data;
    })
  }
  postData(){
    let input = {
      userId: 'ankit',
      value:'12345'
    }
    this.apiService.postData(input).subscribe((data)=>{
      console.log(data)
    })
  }
}
