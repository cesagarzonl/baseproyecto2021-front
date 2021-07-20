import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(private snackBar: MatSnackBar) { }
  /**
   * 
   * @param mostrar boolean
   * @param mensaje String
   */
  ErrorMensaje(mostrar:boolean,mensaje:string){
    if(mostrar){
      const miSnackBar  = this.snackBar.open(mensaje,"X",{
        duration: 5500
      });
    }
  }
}
