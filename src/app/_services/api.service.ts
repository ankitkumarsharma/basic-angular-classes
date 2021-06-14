import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  arrData = [
    {name:'ankit', age: 29},
    {name:'Niyampal', age: 26}
  ];
  url = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http: HttpClient) { }
  add(data:any){
    console.log("Services started", data);
    return data;
  }
  getData(){
    return this.http.get(this.url);
  }
  postData(payload:any){
    return this.http.post(this.url, payload);
  }
}
