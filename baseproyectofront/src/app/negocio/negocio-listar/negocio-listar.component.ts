import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NegocioService } from "../../../service/negocio.service"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-negocio-listar',
  templateUrl: './negocio-listar.component.html',
  styleUrls: ['./negocio-listar.component.css']
})
export class NegocioListarComponent implements OnInit {
  Url:string = 'http://localhost:3000/static/negocios/'
  Negocios:any = []
  misnegocios:any
  
  
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      this.misnegocios = params.misproductos
    });
    this.negocioService.getNegocioList(this.misnegocios).subscribe((data:any)=>{
      this.Negocios =  data.data
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
  constructor(private negocioService:NegocioService,
    private activatedRoute:ActivatedRoute) { }
}
