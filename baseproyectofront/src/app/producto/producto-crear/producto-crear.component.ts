import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormArray } from '@angular/forms';
import { ProductoService } from "../../../service/producto.service"
import { NotificacionesService } from '../../../service/notificaciones.service'



@Component({
  selector: 'app-producto-crear',
  templateUrl: './producto-crear.component.html',
  styleUrls: ['./producto-crear.component.css']
})
export class ProductoCrearComponent implements OnInit {
  mensaje:string=""
  mostrar:any=false
  productoForm = this.fb.group({
    nombre: [null,Validators.required],
    descripcion: [null,Validators.required],
    _id: [null]
  }); 
 
  
  ngOnInit(): void {
  }
  
  onSubmit(){
    if(this.productoForm.valid){
      console.warn(this.productoForm.value);      
      this.productoService
      .postProductoCreate(this.productoForm.value)
      .subscribe((data:any)=>{
        console.log('data',data.mensaje)
        this.notificacionesService.ErrorMensaje(true,data.mensaje)
      })
    }
  }
  
  constructor(    
    private fb: FormBuilder,
    private productoService:ProductoService,
    private notificacionesService:NotificacionesService) 
    { }
}
