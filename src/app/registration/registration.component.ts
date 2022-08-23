import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisService } from '../regis.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  
})

export class RegistrationComponent {
  email: any;
  Form= new FormGroup({
    name :new FormControl('',[Validators.required,Validators.minLength(4)]),
    phoneno :new FormControl('',[Validators.required,Validators.minLength(10)]),
    password :new FormControl('',[Validators.required,Validators.minLength(8)]),
    email : new FormControl('',[Validators.required,Validators.email])
  }); 
  http:any;showMsg: boolean = false;res:any;
  constructor(private _regis:RegisService,private router:Router){};
async Submit(){
  console.log(this.Form.value);
   this.email=this.Form.value.Email;
    this._regis.registration(this.Form.value).subscribe(
    response  => console.log(this.res=response),
    error  => console.log('Error',error),
    );await delay(3000);
    if(JSON.stringify(this.res)==='{"message":"already-exists"}' ){
      alert("User already exists!");
      console.log("User already exists"); 
    }
    else if(JSON.stringify(this.res)==='{"message":"User-created"}'){
      alert("User Created Proceed to login!");
      this.router.navigate(['/login']);
      console.log("passed");
      
    }
    this.showMsg= true;
    this.Form.reset();
}

get getemail(){
  return this.Form.get('email');
}
get password(){
  return this.Form.get('password');
}get name(){
  return this.Form.get('name');
}get phoneno(){
  return this.Form.get('phoneno');
}

}


function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}