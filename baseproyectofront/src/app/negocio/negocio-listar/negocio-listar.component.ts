import { Component, OnInit } from '@angular/core';
import { NegocioService } from "../../../service/negocio.service"

@Component({
  selector: 'app-negocio-listar',
  templateUrl: './negocio-listar.component.html',
  styleUrls: ['./negocio-listar.component.css']
})
export class NegocioListarComponent implements OnInit {
  Url:string = 'http://localhost:3000/static/negocios/'
  Negocios:any = []
  constructor(private negocioService:NegocioService) { }

  ngOnInit(): void {
    this.negocioService.getNegocioList().subscribe((data:any)=>{
      this.Negocios =  data.data
    })
  }

}
