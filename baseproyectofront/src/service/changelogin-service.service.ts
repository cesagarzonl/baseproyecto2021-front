import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeloginServiceService {

  constructor() { }


  $subjetct = new Subject();

  showUserLoggedId():void{
    this.$subjetct.next()
  }

}
