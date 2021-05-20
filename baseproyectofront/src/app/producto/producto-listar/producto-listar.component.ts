import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../../../service/producto.service"

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  Productos:any = []
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductoList().subscribe((data:any)=>{
      this.Productos =  data.data
    })
  }

}
