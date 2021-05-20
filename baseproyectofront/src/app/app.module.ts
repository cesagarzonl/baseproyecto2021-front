import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './usuario/lista/lista.component';
import { CrearComponent } from './usuario/crear/crear.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './usuario/editar/editar.component';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { UsuariologueadoComponent } from './login/usuariologueado/usuariologueado.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductoCrearComponent } from './producto/producto-crear/producto-crear.component';
import { ProductoEditarComponent } from './producto/producto-editar/producto-editar.component';
import { ProductoListarComponent } from './producto/producto-listar/producto-listar.component';
//Import Angular material
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CrearComponent,
    EditarComponent,
    LoginComponent,
    LogoutComponent,
    UsuariologueadoComponent,
    MensajesComponent,
    ProductoCrearComponent,
    ProductoEditarComponent,
    ProductoListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
