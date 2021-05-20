import {Routes,CanActivate} from '@angular/router';

import { ProductoListarComponent } from './producto-listar/producto-listar.component'
import { ProductoCrearComponent } from './producto-crear/producto-crear.component'
import { ProductoEditarComponent } from './producto-editar/producto-editar.component'

export  const productosRoutes:  Routes  = [
    { path: 'list', component: ProductoListarComponent},
    { path: 'crear', component: ProductoCrearComponent},
    { path: 'editar/:id', component: ProductoEditarComponent}
    
];