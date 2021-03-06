import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators,FormArray } from '@angular/forms';
import { UsusuarioService } from '../../../service/ususuario.service'
import { NotificacionesService } from '../../../service/notificaciones.service'
import { Router} from '@angular/router';
import { ChangeloginServiceService } from '../../../service/changelogin-service.service';

//Validations
import { ConfirmedValidator } from '../../../utils/confirmValidations';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  mensaje:string=""
  mostrar:any=false

  ngOnInit(): void {
  }

  usaurioForm = this.fb.group({
    email: [null,Validators.required],
    password: [null,Validators.required],
    usuario: [null,Validators.required],
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
        .postUserCreate(this.usaurioForm.value)
        .subscribe((data:any)=>{
          if(data.status){
            console.log('data.data.data',data.data.data)

            localStorage.setItem('usuario', JSON.stringify(data.data.data.usuario));
            localStorage.setItem('login', JSON.stringify(data.data.data.token));
            this.changeloginServiceService.showUserLoggedId()
            this.router.navigate(['/']);
          }else{
            this.notificacionesService.ErrorMensaje(true,data.mensaje)
          }

          this.notificacionesService.ErrorMensaje(true,data.mensaje)
        })
    }
  }
  constructor(
    private fb: FormBuilder,
    private ususuarioService:UsusuarioService,
    private notificacionesService:NotificacionesService,
    private router:Router,
    private changeloginServiceService:ChangeloginServiceService

    ) { }
}
