import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VistaListadoTablaComponent } from './pages/vista-listado-tabla/vista-listado-tabla.component';
import { VistaNuevoComponent } from './pages/vista-nuevo/vista-nuevo.component';
import { VistaDetalleComponent } from './pages/vista-detalle/vista-detalle.component';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';
import { CambioGradosPipe } from './pipes/cambio-grados.pipe';


@NgModule({
  declarations: [
    AppComponent,
    VistaListadoTablaComponent,
    VistaNuevoComponent,
    VistaDetalleComponent,
    CiudadesComponent,
    CambioGradosPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
