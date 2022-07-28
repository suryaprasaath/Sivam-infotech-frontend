import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisService } from '../../regis.service';

@Component({
  selector: 'app-mobilerecharge',
  templateUrl: './mobilerecharge.component.html',
  styleUrls: ['./mobilerecharge.component.css']
})
export class MobilerechargeComponent {

  regisform= new FormGroup({
    type:new FormControl('Mobile'),
    Mobile :new FormControl('',[Validators.required,Validators.minLength(10)]),
    Plan :new FormControl('',Validators.required),
    Network :new FormControl('',Validators.required),
    Type :new FormControl('',Validators.required)
  });

  constructor(private _regis:RegisService) { }
  Submit(){
    console.log(this.regisform.value);
    this._regis.mobileservice(this.regisform.value).subscribe(
      response  => console.log('Success',response),
      error  => console.log('Error',error),
      );
      this.regisform.reset();
      alert("Registration Successful!")
  }
  get Mobile(){
    return this.regisform.get('Mobile');
  }
  get Plan(){
    return this.regisform.get('Plan');
  }
  get Network(){
    return this.regisform.get('Network');
  }
  get Type(){
    return this.regisform.get('Type');
  }

}
