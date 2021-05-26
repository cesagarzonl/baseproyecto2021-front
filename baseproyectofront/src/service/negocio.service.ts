import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

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


  getNegocioList(){

    return this.http.get(this.dominio+'negocio',this.httpOptions);
  }
  postNegocioCreate(user:any){  
    return this.http.post(this.dominio+'negocio/crear',user,this.httpOptions);
  }
  getNegocioIdDetalle(id:any){  
    return this.http.get(this.dominio+'negocio/byId/'+id,this.httpOptions);
  }
  getNegociobyuser(){
    return this.http.get(this.dominio+'negocio/empresasUser',this.httpOptions);
  }
  getNegociosDestacados(){
    return this.http.get(this.dominio+'negocio/destacados',this.httpOptions);
  }
}
