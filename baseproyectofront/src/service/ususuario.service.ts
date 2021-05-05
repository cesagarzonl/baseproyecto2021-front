import { Injectable  } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsusuarioService {

  
  constructor(private http: HttpClient) { }
  
  getUserList(){
    
    return this.http.get('http://localhost:3000/user',{responseType: 'json'});
  }
}
