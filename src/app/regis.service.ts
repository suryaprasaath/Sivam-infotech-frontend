import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Loginuser } from './loginuser';
import { User } from './user';
import {
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisService {

  _url='/createUser';
  urllogin='/login';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
 

  constructor(private _http: HttpClient) { }




  registration(userData: User)
  {
    return this._http.post<any>(this._url, userData);
  }
  userlogin(logindata: Loginuser)
  {
    return this._http.post<any>(this.urllogin, logindata);
  }

  }


