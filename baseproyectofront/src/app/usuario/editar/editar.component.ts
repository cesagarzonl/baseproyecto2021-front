import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators,FormArray } from '@angular/forms';
import { UsusuarioService } from '../../../service/ususuario.service'

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {



  ngOnInit(): void {

  }
  _id:any

  usaurioForm = this.fb.group({
    email: [null,Validators.required],
    password: [null,Validators.required],
    usuario: [null,Validators.required],
    _id: [null],
    //adicionales: this.fb.array([
      //this.fb.control('')
    //]),
  });

  onSubmit(){
    if(this.usaurioForm.valid){
      this.ususuarioService
        .postUserCreate(this.usaurioForm.value)
        .subscribe((data)=>{
          console.log('data',data)
        })
    }
  }

  constructor(
    private fb: FormBuilder,
    private ususuarioService:UsusuarioService,
    private activatedRoute:ActivatedRoute
    ) { 
      this.activatedRoute.params.subscribe(params=>{
        this._id = params.id
        this.ususuarioService
        .getUserIdDetalle(this._id)
        .subscribe((res:any)=>{
          console.log('res',res.usuario)
          console.log('res.usuario.email',res.usuario.email)
          let data =res.usuario
          this.usaurioForm.setValue({
            email: res.usuario.email,
            password: res.usuario.password,
            usuario:res.usuario.usuario,
            _id:res.usuario._id
         });
        })
      });

    }
}
