import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ciudad } from '../models/ciudad';
import { Temperatura } from '../models/temperatura';
import { Clima } from '../models/clima';

@Component({
  selector: 'app-vista-nuevo',
  templateUrl: './vista-nuevo.component.html',
  styleUrls: ['./vista-nuevo.component.css']
})
export class VistaNuevoComponent implements OnInit {

  @Input() ciudadHijo:Ciudad
  @Output() eventoHijo = new EventEmitter<Ciudad[]>()

  public ciudadPadre: Ciudad


  public ciudades:Ciudad[]
  public show:boolean=false;
  public calido:Clima
  public frio:Clima
  public humedo:Clima
  public seco:Clima
  constructor() { 
    this.calido = new Clima(38,5,0)
    this.frio = new Clima(2,15,0)
    this.humedo = new Clima(38,5,80)
    this.seco = new Clima(4,3,0)
    this.ciudades= [
      
      new Ciudad("Madrid","España","MAD", this.calido),
      new Ciudad("Buenos Aires","Argentina","BUE", this.frio),
      new Ciudad("Melbourne","Australia","MEL", this.humedo),
      new Ciudad("Atenas","Grecia","ATN", this.seco) 
      /* new Ciudad("Madrid","España","MAD"),
      new Ciudad("Buenos Aires","Argentina","BUE"),
      new Ciudad("Melbourne","Australia","MEL"),
      new Ciudad("Atenas","Grecia","ATN")*/
    ]
  }
public agregarCiudad(ciu: HTMLInputElement,pai: HTMLInputElement,cod: HTMLInputElement){
  let nuevaCiudad = new Ciudad(ciu.value,pai.value, cod.value, null);
  this.ciudades.push(nuevaCiudad) 
  this.eventoHijo.emit(this.ciudades) 
}


  ngOnInit(): void {
  }

}

