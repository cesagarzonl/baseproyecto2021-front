import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//modulos

import { usuariosRoutes } from './usuario/usuarioRoutes'

const routes: Routes = [
  { path: 'usuario', children: usuariosRoutes}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
