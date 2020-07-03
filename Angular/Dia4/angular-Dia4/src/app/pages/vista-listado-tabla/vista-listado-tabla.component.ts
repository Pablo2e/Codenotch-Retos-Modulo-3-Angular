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
    
    this.ciudadDetalle=ciud
  }
  
  ngOnInit(): void {
  }

}


