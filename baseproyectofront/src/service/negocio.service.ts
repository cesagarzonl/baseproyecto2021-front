import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SettingsService } from '../app/core/settings.service'

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



  getNegocioList(){

    return this.http.get(SettingsService.host+'negocio',this.httpOptions);
  }
  postNegocioCreate(user:any){  
    return this.http.post(SettingsService.host+'negocio/crear',user,this.httpOptions);
  }
  getNegocioIdDetalle(id:any){  
    return this.http.get(SettingsService.host+'negocio/byId/'+id,this.httpOptions);
  }
  getNegociobyuser(){
    return this.http.get(SettingsService.host+'negocio/empresasUser',this.httpOptions);
  }
  getNegociosDestacados(){
    return this.http.get(SettingsService.host+'negocio/destacados',this.httpOptions);
  }
}
