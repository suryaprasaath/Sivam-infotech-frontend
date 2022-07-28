import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aadhar } from './aadhar';
import { throwError } from 'rxjs';
import { Eventregis } from './eventregis';
import { Fastag } from './fastag';
import { Loginuser } from './loginuser';
import { Mobilerecharge } from './mobilerecharge';
import { Pan } from './pan';
import { Passport } from './passport';
import { Ticket } from './ticket';
import { User } from './user';
import { Observable, Subject, tap } from 'rxjs';
import { Admin } from './admin';
import { Admindata } from './admindata';
import { catchError, map } from 'rxjs/operators';
import {
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisService {

  _url='http://localhost:3000/registration';
  urllogin='http://localhost:3000/login';
  urleventregis='http://localhost:3000/eregis';
  aadharmod='http://localhost:3000/eregis/aadhar';
  panmod='http://localhost:3000/eregis/pan';
  mobilemod='http://localhost:3000/eregis/mobilerecharge';
  passportmod='http://localhost:3000/eregis/passport';
  fastagmod='http://localhost:3000/eregis/fastag';
  ticketmod='http://localhost:3000/eregis/ticketbooking';
  baseUri: string='http://localhost:3000/api';
  admin='http://localhost:3000/admin';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private myadmindata1$: Subject<Admindata[]> = new Subject();

  constructor(private _http: HttpClient) { }

  AdminServiceCheck(service: Admin){
    return this._http.post<any>(this.admin, service);
  }
  private refreshadmindata() {
    this._http.get<Admindata[]>(`${this.panmod}/employees`)
      .subscribe(myadmindata => {
        this.myadmindata1$.next(myadmindata);
      });
  }


  // Get all pandetails
  getpan() {
    return this._http.get(`${this.baseUri}/getpan`);
  }

  deletepan(id): Observable<any> {
    let url = `${this.baseUri}/deletepan/${id}`;
    return this._http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Get all aadhardetails
  getaadhar() {
    return this._http.get(`${this.baseUri}/getaadhar`);
  }

  deleteaadhar(id): Observable<any> {
    let url = `${this.baseUri}/deleteaadhar/${id}`;
    return this._http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Get all mobiledetails
  getmobile() {
    return this._http.get(`${this.baseUri}/getmobile`);
  }

  deletemobile(id): Observable<any> {
    let url = `${this.baseUri}/deletemobile/${id}`;
    return this._http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

    // Get all passportdetails
    getpassport() {
      return this._http.get(`${this.baseUri}/getpassport`);
    }
  
    deletepassport(id): Observable<any> {
      let url = `${this.baseUri}/deletepassport/${id}`;
      return this._http
        .delete(url, { headers: this.headers })
        .pipe(catchError(this.errorMgmt));
    }

    // Get all fastagdetails
    getfastag() {
      return this._http.get(`${this.baseUri}/getfastag`);
    }
  
    deletefastag(id): Observable<any> {
      let url = `${this.baseUri}/deletefastag/${id}`;
      return this._http
        .delete(url, { headers: this.headers })
        .pipe(catchError(this.errorMgmt));
    }
      // Get all pandetails
  getticket() {
    return this._http.get(`${this.baseUri}/getticket`);
  }

  deleteticket(id): Observable<any> {
    let url = `${this.baseUri}/deleteticket/${id}`;
    return this._http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }



  //pranauv code
  getEmployees(): Subject<Admindata[]> {
    this.refreshadmindata();
    return this.myadmindata1$;
  }

  registration(userData: User)
  {
    return this._http.post<any>(this._url, userData);
  }
  userlogin(logindata: Loginuser)
  {
    return this._http.post<any>(this.urllogin, logindata);
  }
  eventregis(eventdata:Eventregis)
  {
    return this._http.post<any>(this.urleventregis, eventdata);
  }
  aadharmodservice(aadhardata:Aadhar)
  {
    return this._http.post<any>(this.aadharmod, aadhardata);
  }
  fastagservice(fastagdata:Fastag)
  {
    return this._http.post<any>(this.fastagmod, fastagdata);
  }
  mobileservice(mobiledata:Mobilerecharge)
  {
    return this._http.post<any>(this.mobilemod, mobiledata);
  }
  panservice(pandata:Pan)
  {
    return this._http.post<any>(this.panmod, pandata);
  }
  passportservice(passportdata:Passport)
  {
    return this._http.post<any>(this.passportmod, passportdata);
  }
  ticketservice(ticketdata:Ticket)
  {
    return this._http.post<any>(this.ticketmod, ticketdata);
  }
}
