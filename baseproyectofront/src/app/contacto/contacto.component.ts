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
      .subscribe((data:any)=>{
        this.notificacionesService.ErrorMensaje(true,data.mensaje)
      })
    }
  }
  constructor(    
    private fb: FormBuilder,
    private generalserviceService:GeneralserviceService,
    private notificacionesService:NotificacionesService,)
    { }
}
