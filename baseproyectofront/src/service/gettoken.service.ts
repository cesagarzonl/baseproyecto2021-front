import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GettokenService {

  token:string="";

  constructor() {
    let tokenLocalString:any= localStorage.getItem('login');
    if(tokenLocalString!=null){
      this.token=JSON.parse(tokenLocalString)
    }
   }

   
   getToken(){
    return this.token
   }


}
