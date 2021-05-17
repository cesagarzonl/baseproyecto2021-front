import { Component, OnInit } from '@angular/core';
import { UsusuarioService } from "../../../service/ususuario.service"

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  Usuarios:any = []
  constructor(private ususuarioService:UsusuarioService) { }

  ngOnInit(): void {
    this.ususuarioService.getUserList().subscribe((data:any)=>{
      this.Usuarios =  data.data
    })
  }

}
