import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators } from '@angular/forms';

import { UsusuarioService } from '../../../service/ususuario.service'

import { NotificacionesService } from '../../../service/notificaciones.service'

@Component({
  selector: 'app-olvio',
  templateUrl: './olvio.component.html',
  styleUrls: ['./olvio.component.css']
})
export class OlvioComponent implements OnInit {

  mensaje:string=''

  ngOnInit(): void {
  }
  usaurioForm = this.fb.group({
    email: [null,Validators.required]

  });

  onSubmit(){
    if(this.usaurioForm.valid){
      console.warn(this.usaurioForm.value);      
      this.ususuarioService
        .Olvidoclavee(this.usaurioForm.value)
        .subscribe((data:any)=>{
          console.log('data',data)
          if(data.status){
            this.notificacionesService.ErrorMensaje(true,data.mensaje)
          }else{
            this.notificacionesService.ErrorMensaje(true,data.mensaje)
          }

        })
    }
  }

  constructor(
    private fb: FormBuilder,
    private ususuarioService:UsusuarioService,
    private notificacionesService:NotificacionesService,

    ) { }


}
