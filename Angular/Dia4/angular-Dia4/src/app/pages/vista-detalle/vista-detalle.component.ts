import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ciudad } from '../models/ciudad';
import { Temperatura } from '../models/temperatura';
import { Clima } from '../models/clima';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.css']
})
export class VistaDetalleComponent implements OnInit {

  @Input() ciudadHijo:Ciudad
  @Input() climaHijo:Clima
  @Input() ciudades:Ciudad[]
  
  public show:boolean=false;
  constructor() {     
  }

  ngOnInit(): void {
  }

}

/* let calido = new Clima(38,5,0)
let frio = new Clima(2,15,0)
let humedo = new Clima(38,5,80)
let seco = new Clima(4,3,0) */

