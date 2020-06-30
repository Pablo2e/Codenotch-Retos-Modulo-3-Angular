import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ciudad } from '../models/ciudad';
import { Temperatura } from '../models/temperatura';
import { Clima } from '../models/clima';

@Component({
  selector: 'app-vista-listado-tabla',
  templateUrl: './vista-listado-tabla.component.html',
  styleUrls: ['./vista-listado-tabla.component.css']
})
export class VistaListadoTablaComponent implements OnInit {


  @Input() ciudadHijo:Ciudad
  @Input() ciudades:Ciudad[]
  public show:boolean=false;
  public ciudadDetalle:Ciudad
  public climaDetalle:Clima
  constructor() { 
    
}
  agregarCiudadDetalle(ciud:Ciudad){
    
    this.ciudadDetalle=new Ciudad(ciud.nombre, ciud.pais, ciud.codigo, ciud.clima)
    this.agregarClimaDetalle(ciud.clima)
  }
  agregarClimaDetalle(clim:Clima){
    /* this.climaDetalle =new Clima(clim.temperatura,clim.viento, clim.precipitaciones)*/
    this.climaDetalle =new Clima(36,5,65)   
    
  }

  ngOnInit(): void {
  }

}

let calido = new Clima(38,5,0)
let frio = new Clima(2,15,0)
let humedo = new Clima(38,5,80)
let seco = new Clima(4,3,0)
