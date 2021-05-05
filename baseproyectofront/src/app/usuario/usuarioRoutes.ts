import {Routes,CanActivate} from '@angular/router';

import { ListaComponent } from './lista/lista.component'
import { CrearComponent } from './crear/crear.component'


export  const usuariosRoutes:  Routes  = [
    { path: 'list', component: ListaComponent},
    { path: 'crear', component: CrearComponent}
];
