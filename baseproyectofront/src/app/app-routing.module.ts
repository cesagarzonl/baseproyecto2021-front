import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//modulos

import { usuariosRoutes } from './usuario/usuarioRoutes'
import { productosRoutes } from './producto/productoRoutes'
import { LoginComponent } from './login/login/login.component'
import { LogoutComponent } from './login/logout/logout.component'
import { negociosRoutes } from './negocio/negocioRoutes'
import { LandingComponent }  from './landing/landing.component'
import { ContactoComponent } from './contacto/contacto.component'
import { adminRoutes } from './admin/adminRoutes'
import { PagenofoundComponent } from './pagenofound/pagenofound.component'

//guards
import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [

  { path: 'usuario', children: usuariosRoutes},
  { path: 'producto', children: productosRoutes},
  { path: 'negocio', children: negociosRoutes},
  { path: 'admin',children: adminRoutes},
  { path: 'login',component: LoginComponent},
  { path: 'logout',component: LogoutComponent},  
  { path: 'landing',component: LandingComponent},
  { path: 'contacto',component: ContactoComponent},
  { path: '', redirectTo: '/landing',  pathMatch:  'full'},
  { path: '**',component: PagenofoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
