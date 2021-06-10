import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../app/core/settings.service'

@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {

  constructor(private http: HttpClient) { }

  postContacto(user:any){  
    return this.http.post(SettingsService.host+'contacto/crear',user,{responseType: 'json'});
  }

}
