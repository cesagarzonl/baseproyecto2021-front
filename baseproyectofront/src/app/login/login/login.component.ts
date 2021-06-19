import { Component, OnInit,ViewChild,Directive } from '@angular/core';

import { FormBuilder,Validators } from '@angular/forms';

import { LoginService } from '../../../service/login.service'

import { Router} from '@angular/router';

import { NotificacionesService } from '../../../service/notificaciones.service'

import { ChangeloginServiceService } from '../../../service/changelogin-service.service'

@Directive({selector: 'app-usuariologueado'})
class ChildDirective {
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild(ChildDirective) child!: ChildDirective;


  mensaje:string=''

  ngOnInit(): void {
  }
  usaurioForm = this.fb.group({
    email: [null,Validators.required],
    password: [null,Validators.required]

  });
  ngAfterViewInit() {

  }
  onSubmit(){
    if(this.usaurioForm.valid){
      console.warn(this.usaurioForm.value);      
      this.loginService
        .postLogin(this.usaurioForm.value)
        .subscribe((data:any)=>{
          if(data.status){
            localStorage.setItem('usuario', JSON.stringify(data.data.usuario));
            localStorage.setItem('login', JSON.stringify(data.data.token));
            this.changeloginServiceService.showUserLoggedId()
            this.router.navigate(['/']);
          }else{
            this.notificacionesService.ErrorMensaje(true,data.mensaje)
          }

        })
    }
  }
  constructor(
    private fb: FormBuilder,
    private loginService:LoginService,
    private notificacionesService:NotificacionesService,
    private router:Router,
    private changeloginServiceService:ChangeloginServiceService
    ) { }

}
