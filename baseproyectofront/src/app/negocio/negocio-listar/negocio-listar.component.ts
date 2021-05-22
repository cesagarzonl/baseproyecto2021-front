import { Component, OnInit } from '@angular/core';
import { NegocioService } from "../../../service/negocio.service"

@Component({
  selector: 'app-negocio-listar',
  templateUrl: './negocio-listar.component.html',
  styleUrls: ['./negocio-listar.component.css']
})
export class NegocioListarComponent implements OnInit {

  Negocios:any = []
  constructor(private negocioService:NegocioService) { }

  ngOnInit(): void {
    this.negocioService.getNegocioList().subscribe((data:any)=>{
      this.Negocios =  data.data
    })
  }

}
