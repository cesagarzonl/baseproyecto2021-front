import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  token:string="";
  httpOptions:any
  constructor(private http: HttpClient) {

    let tokenLocalString:any= localStorage.getItem('login');
    let tokenLocal = JSON.parse(tokenLocalString)
    if(tokenLocalString!=null){
      this.token=JSON.parse(tokenLocalString)
    }

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        authorization: 'beaber '+this.token
      })
    }  
  }
  dominio:string = 'http://localhost:3000/'

  getcontactosList(){

    return this.http.get(this.dominio+'contacto',this.httpOptions);
  }

}
