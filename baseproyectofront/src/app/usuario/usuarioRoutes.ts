import {Routes,CanActivate} from '@angular/router';

import { ListaComponent } from './lista/lista.component'
import { CrearComponent } from './crear/crear.component'
import { EditarComponent } from './editar/editar.component'

export  const usuariosRoutes:  Routes  = [
    { path: 'list', component: ListaComponent},
    { path: 'crear', component: CrearComponent},
    { path: 'editar/:id', component: EditarComponent}
    
];
