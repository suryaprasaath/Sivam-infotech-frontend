import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisService } from '../../regis.service';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.css']
})
export class PassportComponent{

  regisform= new FormGroup({
    type:new FormControl('Passport'),
    Name :new FormControl('',[Validators.required,Validators.minLength(4)]),
    Mobile :new FormControl('',[Validators.required,Validators.minLength(10)]),
    Email : new FormControl('',[Validators.required,Validators.email]),
    Aadhaar :new FormControl('',[Validators.required,Validators.minLength(14)]),
    Pan :new FormControl('',[Validators.required,Validators.minLength(10)]),
    DOB :new FormControl('',Validators.required),
    Employment :new FormControl('',Validators.required),
    Address:new FormControl('',Validators.required),
    Emergency :new FormControl('',[Validators.required,Validators.minLength(10)])
  });

  constructor(private _regis:RegisService) { }
  Submit(){
    console.log(this.regisform.value);
    this._regis.passportservice(this.regisform.value).subscribe(
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
  get Employment(){
    return this.regisform.get('Employment');
  }
  get Pan(){
    return this.regisform.get('Pan');
  }
  get Aadhaar(){
    return this.regisform.get('Aadhaar');
  }
  get Address(){
    return this.regisform.get('Address');
  }
  get Emergency(){
    return this.regisform.get('Emergency');
  }

}
