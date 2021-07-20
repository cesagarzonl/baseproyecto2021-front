import {Routes,CanActivate} from '@angular/router';

import { ListaComponent } from './lista/lista.component'
import { CrearComponent } from './crear/crear.component'
import { EditarComponent } from './editar/editar.component'
import { AuthGuard } from  '../auth/auth.guard'

export  const usuariosRoutes:  Routes  = [
    { path: 'list',canActivate: [AuthGuard], component: ListaComponent},
    { path: 'crear',component: CrearComponent},
    { path: 'editar/:id',canActivate: [AuthGuard], component: EditarComponent}
    
];
