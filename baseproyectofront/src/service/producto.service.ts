import { Injectable  } from '@angular/core';


import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

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


  getProductoList(){

    return this.http.get(this.dominio+'producto',this.httpOptions);
  }
  postProductoCreate(user:any){  
    return this.http.post(this.dominio+'producto/crear',user,this.httpOptions);
  }
  getProductoIdDetalle(id:any){  
    return this.http.get(this.dominio+'producto/byId/'+id,this.httpOptions);
  }
}
