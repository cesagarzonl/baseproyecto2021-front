import {Routes,CanActivate} from '@angular/router';

import { CambioComponent } from './cambio/cambio.component'
import { OlvioComponent } from './olvio/olvio.component'

import { AuthGuard } from  '../auth/auth.guard'

export  const passwordRoutes:  Routes  = [
    { path: 'olvido', component: OlvioComponent},
    { path: 'cambio',canActivate: [AuthGuard], component: CambioComponent}
];