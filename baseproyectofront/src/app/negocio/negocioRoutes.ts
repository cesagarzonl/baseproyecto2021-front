import {Routes,CanActivate} from '@angular/router';

import { NegocioListarComponent } from './negocio-listar/negocio-listar.component'
import { NegocioCrearComponent } from './negocio-crear/negocio-crear.component'
import { NegocioEditarComponent } from './negocio-editar/negocio-editar.component'
import { NegocioDetalleComponent } from './negocio-detalle/negocio-detalle.component'
import { AuthGuard } from  '../auth/auth.guard'

export  const negociosRoutes:  Routes  = [
    { path: 'list', component: NegocioListarComponent},
    { path: 'crear',canActivate: [AuthGuard], component: NegocioCrearComponent},
    { path: 'editar/:id',canActivate: [AuthGuard], component: NegocioEditarComponent},
    { path: 'detalle/:id', component: NegocioDetalleComponent}
    
];