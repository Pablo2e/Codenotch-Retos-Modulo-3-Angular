import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { VistaComponent } from './pages/vista/vista.component';
import { MenuComponent } from './pages/menu/menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CiudadesService } from './shared/ciudades.service';
import { ErrorComponent } from './pages/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    VistaComponent,
    MenuComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CiudadesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
