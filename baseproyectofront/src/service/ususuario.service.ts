import { Injectable  } from '@angular/core';


import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { SettingsService } from '../app/core/settings.service'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { GettokenService } from './gettoken.service'

@Injectable({
  providedIn: 'root'
})

export class UsusuarioService {

  token:string="";
  httpOptions:any
  constructor(private http: HttpClient,
    private gettokenService:GettokenService) {


    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        authorization: 'beaber '+this.gettokenService.getToken()
      })
    }  
  }

  getUserList(){

    return this.http.get(SettingsService.host+'user',this.httpOptions);
  }
  postUserCreate(user:any){  
    return this.http.post(SettingsService.host+'user/crear',user,{responseType: 'json'});
  }
  getUserIdDetalle(id:any){  
    return this.http.get(SettingsService.host+'user/byId/'+id,{responseType: 'json'});
  }
}
