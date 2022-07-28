import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisService } from '../regis.service';



@Component({
  selector: 'app-eventregis',
  templateUrl: './eventregis.component.html',
  styleUrls: ['./eventregis.component.css']
})
export class EventregisComponent{
  //events = new FormControl();
  //events = new FormControl();
  //events = new FormControl();
  //events = new FormControl();
  // regisform= new FormGroup({
  //   Name :new FormControl('',[Validators.required,Validators.minLength(4)]),
  //   Mobile :new FormControl('',[Validators.required,Validators.minLength(10)]),
  //   Email : new FormControl('',[Validators.required,Validators.email]),
  //   Aadhaar :new FormControl('',[Validators.required,Validators.minLength(12)]),
  //   DOB :new FormControl('',Validators.required),
  //   Address:new FormControl('',Validators.required)
  // });

  // constructor(private _regis:RegisService) { }
  // Submit(){
  //   console.log(this.regisform.value);
  //   this._regis.eventregis(this.regisform.value).subscribe(
  //     response  => console.log('Success',response),
  //     error  => console.log('Error',error),
  //     );
  //     this.regisform.reset();
  //     alert("Registration Successful!")
  // }

  // get Email(){
  //   return this.regisform.get('Email');
  // }
  // get Name(){
  //   return this.regisform.get('Name');
  // }get Mobile(){
  //   return this.regisform.get('Mobile');
  // }
  // get DOB(){
  //   return this.regisform.get('DOB');
  // }
  // get Aadhaar(){
  //   return this.regisform.get('Aadhaar');
  // }
  // get Address(){
  //   return this.regisform.get('Address');
  // }
}
