import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormArray } from '@angular/forms';
import { NotificacionesService } from '../../../service/notificaciones.service'
import { NegocioService } from "../../../service/negocio.service"

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-negocio-editar',
  templateUrl: './negocio-editar.component.html',
  styleUrls: ['./negocio-editar.component.css']
})
export class NegocioEditarComponent implements OnInit {

  mensaje:string=""
  mostrar:boolean = false
  url:string = 'http://localhost:3000/static/negocios/'
  imagenurl:string = ''
  private fileName:any;


  ngOnInit(): void {
  }
  _id:any

  negocioForm = this.fb.group({
    nombre: [null,Validators.required],
    descripcion: [null,Validators.required],
    file:[null],
    _id: [null]
  }); 
  onSubmit(){
    if(this.negocioForm.valid){
      this.negocioService
        .postNegocioCreate(this.negocioForm.value)
        .subscribe((data:any)=>{
          this.imagenurl = this.url+data.data.imagen
          this.solicitaUsuario()
        })
    }
  }



  public onFileChange(event:any) {
    const reader = new FileReader();
 
    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
        this.negocioForm.patchValue({
          file: reader.result
        });
      };
    }
  }
 
  solicitaUsuario(){
    this.activatedRoute.params.subscribe(params=>{
      this._id = params.id
      this.negocioService
      .getNegocioIdDetalle(this._id)
      .subscribe((res:any)=>{
        let data =res.data
        this.imagenurl = this.url+data.imagen
        this.negocioForm.setValue({
          nombre: data.nombre,
          descripcion: data.descripcion,
          _id:data._id,
          file:null
       });
      })
    });
  }





  constructor(
    private fb: FormBuilder,
    private negocioService:NegocioService,
    private activatedRoute:ActivatedRoute
    ) {
      this.solicitaUsuario()
    }

}
