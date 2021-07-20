import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { NotificacionesService } from '../../service/notificaciones.service'
import { GeneralserviceService } from "../../service/generalservice.service"

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {



  ngOnInit(): void {
  }
  contactoForm = this.fb.group({
    nombre: [null,Validators.required],
    corrreo:[null,Validators.required],
    mensaje: [null,Validators.required],
    url:[null]
  }); 
  onSubmit(){
    if(this.contactoForm.valid){
      this.generalserviceService
      .postContacto(this.contactoForm.value)
      .subscribe((res:any)=>{
        console.log('res',res)
        if(res.status){
          this.notificacionesService.ErrorMensaje(true, 'Mensaje enviado Correctamente')
        }else{
          this.notificacionesService.ErrorMensaje(true, res.mensaje)
        }

      })
    }
  }
  constructor(    
    private fb: FormBuilder,
    private generalserviceService:GeneralserviceService,
    private notificacionesService:NotificacionesService,)
    { }
}
