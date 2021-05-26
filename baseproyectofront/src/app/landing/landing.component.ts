import { Component, OnInit } from '@angular/core';
import { NegocioService } from "../../service/negocio.service"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  Url:string = 'http://localhost:3000/static/negocios/'
  url:string = 'http://localhost:3000/static/imgusers/'
  Negocios:any = []
  Productos:any = []
  constructor(private negocioService:NegocioService) { }

  ngOnInit(): void {
    this.negocioService.getNegociosDestacados().subscribe((data:any)=>{
      this.Negocios =  data.data.negocio
      this.Productos =  data.data.productos
    })
  }

}
