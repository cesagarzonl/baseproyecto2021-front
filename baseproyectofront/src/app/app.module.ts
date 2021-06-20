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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'
//Componenetes 
import { NegocioCrearComponent } from './negocio/negocio-crear/negocio-crear.component';
import { NegocioEditarComponent } from './negocio/negocio-editar/negocio-editar.component';
import { NegocioListarComponent } from './negocio/negocio-listar/negocio-listar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NegocioDetalleComponent } from './negocio/negocio-detalle/negocio-detalle.component';
import { ProductoDetalleComponent } from './producto/producto-detalle/producto-detalle.component';
import { LandingComponent } from './landing/landing.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactoListComponent } from './admin/contacto/contacto-list/contacto-list.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';

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
    ProductoListarComponent,
    NegocioCrearComponent,
    NegocioEditarComponent,
    NegocioListarComponent,
    FooterComponent,
    NegocioDetalleComponent,
    ProductoDetalleComponent,
    LandingComponent,
    ContactoComponent,
    ContactoListComponent,
    PaginatePipe,
    PagenofoundComponent
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
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatStepperModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
