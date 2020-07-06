import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioDiscoComponent } from './pages/formulario-disco/formulario-disco.component';
import { VistaDiscoComponent } from './pages/vista-disco/vista-disco.component';


const routes: Routes = [
  {path:"modificar",component:FormularioDiscoComponent},
  {path:"ver",component:VistaDiscoComponent},
  {path:"",component:VistaDiscoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }