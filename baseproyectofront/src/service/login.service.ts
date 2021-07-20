import { Injectable  } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../app/core/settings.service'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postLogin(user:any){  
    return this.http.post(SettingsService.host+'login',user,{responseType: 'json'});
  }

}
