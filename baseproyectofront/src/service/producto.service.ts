import { Injectable  } from '@angular/core';


import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { SettingsService } from '../app/core/settings.service'
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



  getProductoList(){

    return this.http.get(SettingsService.host+'producto',this.httpOptions);
  }
  postProductoCreate(user:any){  
    return this.http.post(SettingsService.host+'producto/crear',user,this.httpOptions);
  }
  postCaracteristicasCreate(user:any){  
    return this.http.post(SettingsService.host+'caracteristicas/crear',user,this.httpOptions);
  }
  getProductoIdDetalle(id:any){  
    return this.http.get(SettingsService.host+'producto/byId/'+id,this.httpOptions);
  }
  DeleteCaracterisciasProductoIdDetalle(id:any){  
    return this.http.get(SettingsService.host+'producto/deleteCaracteresiticas/'+id,this.httpOptions);
  }
}
