import {Routes,CanActivate} from '@angular/router';

import { ProductoListarComponent } from './producto-listar/producto-listar.component'
import { ProductoCrearComponent } from './producto-crear/producto-crear.component'
import { ProductoEditarComponent } from './producto-editar/producto-editar.component'
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component'
import { AuthGuard } from  '../auth/auth.guard'

export  const productosRoutes:  Routes  = [
    { path: 'list', component: ProductoListarComponent},
    { path: 'crear',canActivate: [AuthGuard], component: ProductoCrearComponent},
    { path: 'editar/:id', canActivate: [AuthGuard],component: ProductoEditarComponent},
    { path: 'detalle/:id',canActivate: [AuthGuard],component:ProductoDetalleComponent },
    { path: 'list/:misproductos', component: ProductoListarComponent},
];