import { Injectable  } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class UsusuarioService {



  constructor(private http: HttpClient) { }
  dominio:string = 'http://localhost:3000/'
  getUserList(){  
    return this.http.get(this.dominio+'user',{responseType: 'json'});
  }
  postUserCreate(user:any){  
    return this.http.post(this.dominio+'user/crear',user,{responseType: 'json'});
  }
  getUserIdDetalle(id:any){  
    return this.http.get(this.dominio+'user/byId/'+id,{responseType: 'json'});
  }
}
