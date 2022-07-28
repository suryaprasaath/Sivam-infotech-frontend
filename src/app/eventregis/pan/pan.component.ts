import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisService } from '../../regis.service';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.css']
})
export class PanComponent {

  regisform= new FormGroup({
    type:new FormControl('Pan'),
    Name :new FormControl('',[Validators.required,Validators.minLength(4)]),
    Mobile :new FormControl('',[Validators.required,Validators.minLength(10)]),
    Email : new FormControl('',[Validators.required,Validators.email]),
    DOB :new FormControl('',Validators.required),
    Address:new FormControl('',Validators.required)
  });

  constructor(private _regis:RegisService) { }
  Submit(){
    console.log(this.regisform.value);
    this._regis.panservice(this.regisform.value).subscribe(
      response  => console.log('Success',response),
      error  => console.log('Error',error),
      );
      this.regisform.reset();
      alert("Registration Successful!")
  }

  get Email(){
    return this.regisform.get('Email');
  }
  get Name(){
    return this.regisform.get('Name');
  }get Mobile(){
    return this.regisform.get('Mobile');
  }
  get DOB(){
    return this.regisform.get('DOB');
  }
  get Address(){
    return this.regisform.get('Address');
  }

}
