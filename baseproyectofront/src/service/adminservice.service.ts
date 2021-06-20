import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SettingsService } from '../app/core/settings.service'
import { GettokenService } from './gettoken.service'
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {


  httpOptions:any
  constructor(
    private http: HttpClient,
    private gettokenService:GettokenService)
     {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        authorization: 'beaber '+this.gettokenService.getToken()
      })
    }  
  }

  getcontactosList(){

    return this.http.get(SettingsService.host+'contacto',this.httpOptions);
  }

}
