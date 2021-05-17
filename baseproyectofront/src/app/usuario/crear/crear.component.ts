import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators,FormArray } from '@angular/forms';
import { UsusuarioService } from '../../../service/ususuario.service'
import { NotificacionesService } from '../../../service/notificaciones.service'

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
  /*updateName() {
    this.name.setValue('Nancy');
  }*/
  usaurioForm = this.fb.group({
    email: [null,Validators.required],
    password: [null,Validators.required],
    usuario: [null,Validators.required],
    _id: [null],
    //adicionales: this.fb.array([
      //this.fb.control('')
    //]),
  });

  /*get adicionales() {
    return this.usaurioForm.get('adicionales') as FormArray;
  }

  /*addAlias() {
    this.adicionales.push(this.fb.control(''));
  }*/

  /*usaurioForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    usuario: new FormControl(''),
    _id: new FormControl(''),
  })*/

  onSubmit(){
    if(this.usaurioForm.valid){
      console.warn(this.usaurioForm.value);      
      this.ususuarioService
        .postUserCreate(this.usaurioForm.value)
        .subscribe((data:any)=>{
          console.log('data',data)
          this.notificacionesService.ErrorMensaje(true,data.menssaje)
        })
    }
  }
  constructor(
    private fb: FormBuilder,
    private ususuarioService:UsusuarioService,
    private notificacionesService:NotificacionesService
    ) { }
}
