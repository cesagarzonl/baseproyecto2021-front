import {Routes,CanActivate} from '@angular/router';

import { ProductoListarComponent } from './producto-listar/producto-listar.component'
import { ProductoCrearComponent } from './producto-crear/producto-crear.component'
import { ProductoEditarComponent } from './producto-editar/producto-editar.component'
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component'

export  const productosRoutes:  Routes  = [
    { path: 'list', component: ProductoListarComponent},
    { path: 'crear', component: ProductoCrearComponent},
    { path: 'editar/:id', component: ProductoEditarComponent},
    { path: 'detalle/:id',component:ProductoDetalleComponent }
    
];