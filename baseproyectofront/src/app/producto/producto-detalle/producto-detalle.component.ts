import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacionesService } from '../../../service/notificaciones.service'
import { ProductoService } from "../../../service/producto.service"
import { NegocioService } from "../../../service/negocio.service"

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  url:string = 'http://localhost:3000/static/imgusers/'
  urlnegocio:string = 'http://localhost:3000/static/negocios/'
  _id:any
  imagenurl:string = ''
  producto:any
  caracteristicas:any
  negocio:any
  panelOpenState:boolean = false
  ngOnInit(): void {
    this.solicitaUsuario()
  }

  solicitaUsuario(){
    this.activatedRoute.params.subscribe(params=>{
      this._id = params.id
      this.productoService
      .getProductoIdDetalle(this._id)
      .subscribe((res:any)=>{
        let data =res.data
        this.imagenurl = this.url+data.imagen
        this.producto = data.producto
        this.negocio = data.producto.negocio
        this.caracteristicas = data.caracteristicas
      })
    });
  }
  constructor(
    private productoService:ProductoService,
    private megocioService:NegocioService,
    private activatedRoute:ActivatedRoute) { }
}
