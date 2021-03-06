import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators,FormArray } from '@angular/forms';
import { UsusuarioService } from '../../../service/ususuario.service'

import { ActivatedRoute } from '@angular/router';

import { ChangeloginServiceService } from '../../../service/changelogin-service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  mensaje:string=""
  mostrar:boolean = false


  ngOnInit(): void {

  }
  _id:any

  usaurioForm = this.fb.group({
    email: [null,Validators.required],
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
        .subscribe((data:any)=>{
          localStorage.setItem('usuario', JSON.stringify(data.data));
          this.changeloginServiceService.showUserLoggedId()
        })
    }
  }

  constructor(
    private fb: FormBuilder,
    private ususuarioService:UsusuarioService,
    private activatedRoute:ActivatedRoute,
    private changeloginServiceService:ChangeloginServiceService
    ) { 
      this.activatedRoute.params.subscribe(params=>{
        this._id = params.id
        this.ususuarioService
        .getUserIdDetalle(this._id)
        .subscribe((res:any)=>{
          let data =res.data
          this.usaurioForm.setValue({
            email: data.email,
            usuario:data.usuario,
            _id:data._id
         });
        })
      });

    }
}
