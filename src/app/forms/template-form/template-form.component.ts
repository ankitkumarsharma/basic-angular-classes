import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  name!:string;
  email!:string;
  address!:string;
  formValuePre:any;
  submitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(form.valid){
      this.submitted = false;
      this.formValuePre = form.value;
    } else {
      this.submitted = true;
    }
  }
}
