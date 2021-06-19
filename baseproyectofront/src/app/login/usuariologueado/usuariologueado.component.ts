import { Component, OnInit,Input } from '@angular/core';
import { ChangeloginServiceService } from '../../../service/changelogin-service.service'

@Component({
  selector: 'app-usuariologueado',
  templateUrl: './usuariologueado.component.html',
  styleUrls: ['./usuariologueado.component.css']
})
export class UsuariologueadoComponent implements OnInit {

  constructor(private changeloginServiceService:ChangeloginServiceService) { }
  usuario:any

  @Input() reiniciaradicional!: boolean;


  ngOnInit(): void {
    this.changeloginServiceService.$subjetct.subscribe(()=>{
      this.getuser()    
    })
  }

  getuser(): void{
    let userLocalString:any= localStorage.getItem('usuario');
    let userLocal = JSON.parse(userLocalString)
    if(userLocal!=null){
      this.usuario=userLocal
    }
  }

}
