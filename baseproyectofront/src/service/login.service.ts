import { Injectable  } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  dominio:string = 'http://localhost:3000/'
  postLogin(user:any){  
    return this.http.post(this.dominio+'login',user,{responseType: 'json'});
  }

}
