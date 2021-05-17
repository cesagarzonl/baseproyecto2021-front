import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-usuariologueado',
  templateUrl: './usuariologueado.component.html',
  styleUrls: ['./usuariologueado.component.css']
})
export class UsuariologueadoComponent implements OnInit {

  constructor() { }
  usuario:any

  @Input() reiniciaradicional!: boolean;


  ngOnInit(): void {
    this.getuser()
    if (this.reiniciaradicional) {
      this.getuser()
    }
  }

  getuser(): void{
    let userLocalString:any= localStorage.getItem('usuario');
    let userLocal = JSON.parse(userLocalString)
    if(userLocal!=null){
      this.usuario=userLocal
    }
  }

}
