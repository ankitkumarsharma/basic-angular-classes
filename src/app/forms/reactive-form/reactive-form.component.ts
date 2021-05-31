import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  regForm!:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {

    this.regForm = this._fb.group({
      name: ['ankit', Validators.required],
      pwd: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      city: ['']
    });

  }
  get fc(){
    return this.regForm.controls;
  }
  onSubmit(){
    if(this.regForm.valid){
      this.regForm.value;
      console.log(this.regForm.value)
    } else {
      this.regForm.markAllAsTouched();
    }
  }
  setValue(){
    // this.regForm.setValue({
    //   name:'ankitttt',
    //   pwd: '123456',
    //   email:'ankit@gmail.com',
    //   city:'delhi'
    // });


    // this.regForm.get('name')?.patchValue('ankithhhhhhhhhhhhhhhh');


    // this.regForm.controls['name']?.patchValue('ankithhhhhhhhhhhhhhhh');

    
    this.regForm.patchValue({
      name:'ankitttt',
      pwd: '123456',
    });
  }

}
