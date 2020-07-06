import { Component, OnInit } from '@angular/core';
import { DiscoService } from 'src/app/shared/disco.service';
import { Disco } from 'src/app/model/disco';


@Component({
  selector: 'app-formulario-disco',
  templateUrl: './formulario-disco.component.html',
  styleUrls: ['./formulario-disco.component.css']
})
export class FormularioDiscoComponent implements OnInit {

  
  /* public disco:object */
  public disco= new Disco(null,null,null,null)

  constructor(public discoService:DiscoService) {
    console.log("Funcionando servicio formulario-disco")
    this.disco
  }

  onSubmit(form){
    console.log(form.value)
  }

  anyadir(id:number, titulo:string, interprete:string, anyoPublicacion:number ){
    console.log('Hola desde anyadir')
    console.log(this.discoService.disco)
    this.discoService.anyadirDisco(new Disco(null,titulo,interprete,anyoPublicacion )).subscribe((data)=>{
      console.log(data)
    })
  }
  modificar(id:number, titulo:string, interprete:string, anyoPublicacion:number ){
    console.log('Hola desde modificar')
    console.log(this.discoService.disco)
    this.discoService.actualizarDisco(new Disco(id,titulo,interprete,anyoPublicacion )).subscribe((data)=>{
      console.log(data)
    })
  }
  borrar(id:number){
    console.log('Hola desde borrar')
    this.discoService.borrarDisco(id).subscribe((data)=>{
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
