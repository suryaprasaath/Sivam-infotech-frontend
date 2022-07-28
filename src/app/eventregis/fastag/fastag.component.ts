import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisService } from '../../regis.service';

@Component({
  selector: 'app-fastag',
  templateUrl: './fastag.component.html',
  styleUrls: ['./fastag.component.css']
})
export class FastagComponent {

  regisform= new FormGroup({
    type:new FormControl('Fastag'),
    Name :new FormControl('',[Validators.required,Validators.minLength(4)]),
    Mobile :new FormControl('',[Validators.required,Validators.minLength(10)]),
    Email : new FormControl('',[Validators.required,Validators.email]),
    Pan :new FormControl('',[Validators.required,Validators.minLength(10)]),
    VehicleType :new FormControl('',Validators.required),
    RegisterNumber :new FormControl('',Validators.required),
    DOB :new FormControl('',Validators.required),
    Address:new FormControl('',Validators.required)
  });

  constructor(private _regis:RegisService) { }
  Submit(){
    console.log(this.regisform.value);
    this._regis.fastagservice(this.regisform.value).subscribe(
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
  get Pan(){
    return this.regisform.get('Pan');
  }
  get VehicleType(){
    return this.regisform.get('VehicleType');
  }
  get RegisterNumber(){
    return this.regisform.get('RegisterNumber');
  }
  get Address(){
    return this.regisform.get('Address');
  }

}
