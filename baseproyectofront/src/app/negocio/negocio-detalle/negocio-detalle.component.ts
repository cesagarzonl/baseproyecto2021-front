import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators,FormArray } from '@angular/forms';
import { NotificacionesService } from '../../../service/notificaciones.service'
import { NegocioService } from "../../../service/negocio.service"

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-negocio-detalle',
  templateUrl: './negocio-detalle.component.html',
  styleUrls: ['./negocio-detalle.component.css']
})
export class NegocioDetalleComponent implements OnInit {
  url:string = 'http://localhost:3000/static/negocios/'
  urlproductos:string = 'http://localhost:3000/static/imgusers/'
  _id:any
  negocio:any
  imagenurl:string = ''
  Productos:any = []
  ngOnInit(): void {
  }

  solicitaUsuario(){
    this.activatedRoute.params.subscribe(params=>{
      this._id = params.id
      this.negocioService
      .getNegocioIdDetalle(this._id)
      .subscribe((res:any)=>{
        console.log('res',res)
        let data =res.data
        this.Productos = data.productos
        this.imagenurl = this.url+data.imagen
        this.negocio = data.negocio 
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
