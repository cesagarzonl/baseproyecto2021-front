import {Routes,CanActivate} from '@angular/router';

import { ContactoListComponent } from './contacto/contacto-list/contacto-list.component'

export  const adminRoutes:  Routes  = [
    { path: 'contacto', component: ContactoListComponent},  
];