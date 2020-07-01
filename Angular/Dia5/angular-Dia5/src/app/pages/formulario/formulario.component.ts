import { Component, OnInit } from '@angular/core';
import { CiudadesService } from 'src/app/shared/ciudades.service';
import { Ciudad } from 'src/app/models/ciudad';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

 
  constructor(public ciudadesService: CiudadesService) {
    console.log("Funcionando servicio formulario")
   }

  nuevaCiudad(nombre:string, pais:string, codigo:string){
    this.ciudadesService.ciudad = new Ciudad(nombre, pais, codigo)
    this.ciudadesService.add(this.ciudadesService.ciudad)
  }
  ciudadPorCodigo(code:string){
    this.ciudadesService.ciudad = this.ciudadesService.getOne(code)
  }
  cambiarShow(){
    this.ciudadesService.show = !this.ciudadesService.show
  }

  editarCiudad(code:string, code2:string, nombre:string, pais:string){
    let nuevaCiudad = new Ciudad(nombre, pais, code2)
    this.ciudadesService.edit(code,nuevaCiudad) 
 }

  borrarCiudad(code: string){
    this.ciudadesService.delete(code)
  }

  ngOnInit(): void {
  }

}
