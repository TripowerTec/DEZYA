import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const apiURL = environment.apiURL;

//import { User } from '../_models';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class UserService {

    constructor(private http: HttpClient) { }
  
    regdetails(params): Observable<any> {
      debugger;
      return this.http.post<any>(apiURL + `api/user/register`, params, httpOptions).pipe(tap());
    }
    logdetails(params): Observable<any> {
      debugger;
      return this.http.post<any>(apiURL + `api/user/login`, params, httpOptions).pipe(tap());
    }

    forgotPassword(params): Observable<any> {
      debugger;
      return this.http.post<any>(apiURL + `api/user/forgetpassword`, params, httpOptions).pipe(tap());
    }
    resetPassword(params): Observable<any> {
      debugger;
      return this.http.post<any>(apiURL + `api/user/resetpassword`, params, httpOptions).pipe(tap());
    }
    getHomeProductList(): Observable<any> {
      debugger;
      return this.http.get<any>(apiURL + `api/product/callallproducts/1`, httpOptions).pipe(tap());
    }
    getProductList(params): Observable<any> {
      debugger;
      return this.http.get<any>(apiURL + `api/product/callproduct/`+params, httpOptions).pipe(tap());
    }

}