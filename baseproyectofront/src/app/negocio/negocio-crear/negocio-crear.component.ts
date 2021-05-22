import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormArray } from '@angular/forms';
import { NotificacionesService } from '../../../service/notificaciones.service'
import { NegocioService } from '../../../service/negocio.service'


@Component({
  selector: 'app-negocio-crear',
  templateUrl: './negocio-crear.component.html',
  styleUrls: ['./negocio-crear.component.css']
})
export class NegocioCrearComponent implements OnInit {
  mensaje:string=""
  mostrar:any=false
  private fileName:any;
  imagenurl:string = ''
  negocioForm = this.fb.group({
    nombre: [null,Validators.required],
    descripcion: [null,Validators.required],
    _id: [null],
    file:[null]
  }); 


  ngOnInit(): void {
  }
  onSubmit(){
    if(this.negocioForm.valid){
      console.warn(this.negocioForm.value);      
      this.negocioService
      .postNegocioCreate(this.negocioForm.value)
      .subscribe((data:any)=>{
        console.log('data',data.mensaje)
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
        this.negocioForm.patchValue({
          file: reader.result
        });
      };
    }
  }

  constructor(    
    private fb: FormBuilder,
    private negocioService:NegocioService,
    private notificacionesService:NotificacionesService) 
    { }


}
