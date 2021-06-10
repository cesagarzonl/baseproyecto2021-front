import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../../../service/adminservice.service'

import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.css']
})
export class ContactoListComponent implements OnInit {
  Contactos:any = []
  constructor(private adminserviceService:AdminserviceService) { }

  ngOnInit(): void {
    this.adminserviceService.getcontactosList().subscribe((data:any)=>{
      this.Contactos =  data.data
      
    })
  }
  /**
   * Paginacion
   */
   page_size:number = 4
   page_number:number = 0
   handlePage(e:PageEvent){
     this.page_size = e.pageSize
     this.page_number = e.pageIndex
   }
   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

}


export interface PeriodicElement {
  procesado: boolean;
  nombre: string;
  mensaje: string;
  url: string;
}

