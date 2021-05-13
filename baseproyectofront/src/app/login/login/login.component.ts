import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators,FormArray } from '@angular/forms';

import { LoginService } from '../../../service/login.service'

import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensaje:string=''

  ngOnInit(): void {
  }
  usaurioForm = this.fb.group({
    email: [null,Validators.required],
    password: [null,Validators.required]

  });

  onSubmit(){
    if(this.usaurioForm.valid){
      console.warn(this.usaurioForm.value);      
      this.loginService
        .postLogin(this.usaurioForm.value)
        .subscribe((data:any)=>{
          if(data.status){
            localStorage.setItem('usuario', JSON.stringify(data.data.usuario));
            localStorage.setItem('login', JSON.stringify(data.data.token));
            this.router.navigate(['/']);
            
          }else{
            this.mensaje = data.mensaje
          }

        })
    }
  }
  constructor(
    private fb: FormBuilder,
    private loginService:LoginService,
    private router:Router
    ) { }

}
