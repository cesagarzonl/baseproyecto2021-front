import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormArray } from '@angular/forms';
import { UsusuarioService } from '../../../service/ususuario.service'
import { NotificacionesService } from '../../../service/notificaciones.service'

//Validations
import { ConfirmedValidator } from '../../../utils/confirmValidations';
@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.css']
})
export class CambioComponent implements OnInit {



  ngOnInit(): void {
  }
  usaurioForm = this.fb.group({
    password: [null,Validators.required],
    password2: [null],
    _id: [null],
  },{validator:ConfirmedValidator('password','password2')});

  get f(){

    return this.usaurioForm.controls;

  }
  onSubmit(){
    if(this.usaurioForm.valid){
      console.warn(this.usaurioForm.value);      
      this.ususuarioService
        .Cambioclavee(this.usaurioForm.value)
        .subscribe((data:any)=>{
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
    private notificacionesService:NotificacionesService

    ) { }

}
