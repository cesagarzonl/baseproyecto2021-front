import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//modulos

import { usuariosRoutes } from './usuario/usuarioRoutes'
import { productosRoutes } from './producto/productoRoutes'
import { LoginComponent } from './login/login/login.component'
import { LogoutComponent } from './login/logout/logout.component'

const routes: Routes = [
  { path: 'usuario', children: usuariosRoutes},
  { path: 'producto', children: productosRoutes},
  { path: 'login',component: LoginComponent},
  { path: 'logout',component: LogoutComponent},  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
