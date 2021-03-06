import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Ciudad } from '../models/ciudad';
import { Temperatura } from '../models/temperatura';
import { Clima } from '../models/clima';



@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  @Input() ciudadHijo:Ciudad[]
  @Output() eventoHijo = new EventEmitter<Ciudad>()

  public ciudadPadre: Ciudad
  public ciudadCreada: Ciudad
  constructor() {/*  
    this.ciudades= [
      /* new Ciudad("Madrid","España","MAD", calido),
      new Ciudad("Buenos Aires","Argentina","BUE", frio),
      new Ciudad("Melbourne","Australia","MEL", humedo),
      new Ciudad("Atenas","Grecia","ATN", seco) 
      new Ciudad("Madrid","España","MAD"),
      new Ciudad("Buenos Aires","Argentina","BUE"),
      new Ciudad("Melbourne","Australia","MEL"),
      new Ciudad("Atenas","Grecia","ATN")
    ]
  }
 
public agregarCiudad(ciu: HTMLInputElement,pai: HTMLInputElement,cod: HTMLInputElement){
  let nuevaCiudad = new Ciudad(ciu.value,pai.value, cod.value);
  this.ciudades.push(nuevaCiudad) */
  
}
eligeCiudad(nuevaCiudad:Ciudad){
    this.ciudadCreada=nuevaCiudad
}

  ngOnInit(): void {
  }

}

let calido = new Clima(38,5,0)
let frio = new Clima(2,15,0)
let humedo = new Clima(38,5,80)
let seco = new Clima(4,3,0)