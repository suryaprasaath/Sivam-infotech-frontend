import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisService } from '../../regis.service';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent{

  regisform= new FormGroup({
    type:new FormControl('ticket'),
    Name :new FormControl('',Validators.required),
    Mobile :new FormControl('',[Validators.required,Validators.minLength(10)]),
    Address :new FormControl('',Validators.required),
    MOT :new FormControl('',Validators.required),
    Number :new FormControl('',Validators.required),
    Datetime :new FormControl('',Validators.required)
  });

  constructor(private _regis:RegisService) { }
  Submit(){
    console.log(this.regisform.value);
    this._regis.ticketservice(this.regisform.value).subscribe(
      response  => console.log('Success',response),
      error  => console.log('Error',error),
      );
      this.regisform.reset();
      alert("Registration Successful!")
  }
  get Name(){
    return this.regisform.get('Name');
  }
  get Mobile(){
    return this.regisform.get('Mobile');
  }
  get Address(){
    return this.regisform.get('Address');
  }
  get MOT(){
    return this.regisform.get('MOT');
  }
  get Number(){
    return this.regisform.get('Number');
  }
  get Datetime(){
    return this.regisform.get('Datetime');
  }

}
