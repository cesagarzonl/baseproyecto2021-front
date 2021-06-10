import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {

  constructor(private http: HttpClient) { }
  dominio:string = 'http://localhost:3000/'
  postContacto(user:any){  
    return this.http.post(this.dominio+'contacto/crear',user,{responseType: 'json'});
  }

}
