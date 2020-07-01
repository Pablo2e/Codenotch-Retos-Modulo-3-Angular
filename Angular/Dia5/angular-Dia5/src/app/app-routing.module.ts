import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { VistaComponent } from './pages/vista/vista.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ErrorComponent } from './pages/error/error.component';



const routes: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"formulario", component:FormularioComponent},
  {path:"vista", component:VistaComponent},
  {path:"", component:InicioComponent, pathMatch: 'full'},
  {path:"**", component:ErrorComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
