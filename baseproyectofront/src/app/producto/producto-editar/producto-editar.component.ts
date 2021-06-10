import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators,FormArray } from '@angular/forms';
import { NotificacionesService } from '../../../service/notificaciones.service'
import { ProductoService } from "../../../service/producto.service"
import { NegocioService } from "../../../service/negocio.service"
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  mensaje:string=""
  mostrar:boolean = false
  url:string = 'http://localhost:3000/static/imgusers/'
  imagenurl:string = ''
  private fileName:any;
  empresas:any = []

  ngOnInit(): void {
    this.getEmpresasByusuario()
  }
  _id:any

  productoForm = this.fb.group({
    nombre: [null,Validators.required],
    descripcion: [null,Validators.required],
    file:[null],
    negocio:[null,Validators.required],
    _id: [null],
    valor:[null,Validators.required],
    caracteretisticas: this.fb.array([
      this.fb.control('')
    ])
  }); 


  get caracteretisticas() {
    return this.productoForm.get('caracteretisticas') as FormArray;
  }
  addAlias(text:string) {
    this.caracteretisticas.push(this.fb.control((text)? text:''));
  }
  clearAlias(i:number){
    this.caracteretisticas.removeAt(i);
  }


  onSubmit(){
    if(this.productoForm.valid){
      this.productoService
        .postProductoCreate(this.productoForm.value)
        .subscribe((data:any)=>{
          if(data.status){
            this.imagenurl = this.url+data.data.imagen
            this.solicitaUsuario()
          }else{
            this.notificacionesService.ErrorMensaje(true, data.mensaje)
          }

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
 
  solicitaUsuario(){
    this.activatedRoute.params.subscribe(params=>{
      this._id = params.id
      this.productoService
      .getProductoIdDetalle(this._id)
      .subscribe((res:any)=>{
        let data =res.data
        let producto = data.producto
        this.imagenurl = this.url+producto.imagen
        let caracteristicas = data.caracteristicas
        let arrayData = []
        for (let index = 0; index < caracteristicas.length; index++) {
          if(caracteristicas[index].descripcion){
            this.addAlias(caracteristicas[index].descripcion)
            arrayData.push(caracteristicas[index].descripcion)
          }
        }

        this.productoForm.setValue({
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          _id:producto._id,
          negocio:producto.negocio._id,
          valor:producto.valor || 0,
          file:null,
          caracteretisticas:arrayData
       });
      })
    });
  }
  elminarTodo(){
    for (let index = 0; index < this.caracteretisticas.length; index++) {
      this.caracteretisticas.removeAt(index);
    }


    this.productoService.DeleteCaracterisciasProductoIdDetalle(this._id)
      .subscribe((res:any)=>{
        if(res.status){
          this.solicitaUsuario()
        }else{
          this.notificacionesService.ErrorMensaje(true, res.mensaje)
        }
      })
  }

  getEmpresasByusuario(){
    this.megocioService.getNegociobyuser().subscribe((res:any)=>{
      this.empresas = res.data.negocio
    })
  }



  constructor(
    private fb: FormBuilder,
    private productoService:ProductoService,
    private activatedRoute:ActivatedRoute,
    private megocioService:NegocioService,
    private notificacionesService:NotificacionesService,
    ) {
      this.solicitaUsuario()
    }
}
