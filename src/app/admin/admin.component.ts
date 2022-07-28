import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisService } from '../regis.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  searchbox= new FormGroup({
    Services :new FormControl('',Validators.required)
  });

  constructor(private _regis:RegisService) { }
  Submit(){
    console.log(this.searchbox.value);
    this._regis.mobileservice(this.searchbox.value).subscribe(
      response  => console.log('Success',response),
      error  => console.log('Error',error),
      );
      this.searchbox.reset();
      alert("Registration Successful!")
  }
  get Search(){
    return this.searchbox.get('Services');
  }
}
