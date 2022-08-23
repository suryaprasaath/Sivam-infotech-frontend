import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, SelectMultipleControlValueAccessor, Validators } from '@angular/forms';
import { RegisService } from '../regis.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{

  loginform=new FormGroup({
    name :new FormControl('',[Validators.required]),
    password :new FormControl('',[Validators.required]),
  });
  get password(){
    return this.loginform.get('password');
  }get name(){
    return this.loginform.get('name');
  };
res:any;
err:any;
  constructor(private loginc:RegisService,private router:Router,public dialog: MatDialog) { }
 async login(){
   this.loginc.userlogin(this.loginform.value).subscribe(
      response  => console.log(this.res=response),
      error  => this.err=error,
      );await  delay(3000);


      console.log("s"+this.res);
      console.log(JSON.stringify(this.res));
      var user1: Array<string>=[];
      user1.push(JSON.stringify(this.res));
      if(JSON.stringify(this.res)==='{"message":"notfound"}' ){
        alert("User not found!");
        console.log("user not found"); 
      }
      else if(JSON.stringify(this.res)==='{"message":"positive"}'){
        alert("Login Successful!");
        this.router.navigate(['/products']);
        console.log("passed");
        
      }
      if(JSON.stringify(this.res)==='{"message":"negative"}'){
        console.log("failed");
        alert("Invalid Password!");
      }
  }
}
function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}