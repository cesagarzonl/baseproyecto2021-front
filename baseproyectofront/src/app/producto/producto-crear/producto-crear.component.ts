import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormArray } from '@angular/forms';
import { ProductoService } from "../../../service/producto.service"
import { NotificacionesService } from '../../../service/notificaciones.service'
import { NegocioService } from "../../../service/negocio.service"


@Component({
  selector: 'app-producto-crear',
  templateUrl: './producto-crear.component.html',
  styleUrls: ['./producto-crear.component.css']
})
export class ProductoCrearComponent implements OnInit {
  mensaje:string=""
  empresas:any = []
  private fileName:any;
  mostrar:any=false
  productoForm = this.fb.group({
    nombre: [null,Validators.required],
    descripcion: [null,Validators.required],
    negocio:[null,Validators.required],
    file:[null],
    _id: [null]
  }); 
 
  
  ngOnInit(): void {
    this.getEmpresasByusuario()
  }
  
  onSubmit(){
    if(this.productoForm.valid){
      console.warn(this.productoForm.value);      
      this.productoService
      .postProductoCreate(this.productoForm.value)
      .subscribe((data:any)=>{
        this.notificacionesService.ErrorMensaje(true,data.mensaje)
      })
    }
  }
  public onFileChange(event:any) {
    const reader = new FileReader();
 
    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
        this.productoForm.patchValue({
          file: reader.result
        });
      };
    }
  }

  getEmpresasByusuario(){
    this.megocioService.getNegociobyuser().subscribe((res:any)=>{
      this.empresas = res.data.negocio
    })
  }

  constructor(    
    private fb: FormBuilder,
    private productoService:ProductoService,
    private notificacionesService:NotificacionesService,
    private megocioService:NegocioService) 
    { }
}
