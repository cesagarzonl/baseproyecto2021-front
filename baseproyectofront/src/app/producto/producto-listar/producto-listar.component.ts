import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductoService } from "../../../service/producto.service"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  Productos:any = []
  url:string = 'http://localhost:3000/static/imgusers/'

  misproductos:any
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.misproductos = params.misproductos
    });

    this.productoService.getProductoList(this.misproductos).subscribe((data:any)=>{
      this.Productos =  data.data
    })
  }
  /**
   * Paginacion
   */
   page_size:number = 4
   page_number:number = 0
   handlePage(e:PageEvent){
     this.page_size = e.pageSize
     this.page_number = e.pageIndex
   }

   constructor(private productoService:ProductoService,
    private activatedRoute:ActivatedRoute) { }


}
