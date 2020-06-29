import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';
import { PorcentajePipe } from './pipes/porcentaje.pipe';
import { CambioGradosPipe } from './pipes/cambio-grados.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent,
    PorcentajePipe,
    CambioGradosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
