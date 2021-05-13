import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario:string=''

  title = 'baseproyectofront';
  getuser(): void{
    let userLocalString:any= localStorage.getItem('usuario');
    let userLocal = JSON.parse(userLocalString)
    if(userLocal!=null){
      this.usuario=userLocal.usuario
    }
  }
  ngOnInit(): void {
    this.getuser()
  }
}

