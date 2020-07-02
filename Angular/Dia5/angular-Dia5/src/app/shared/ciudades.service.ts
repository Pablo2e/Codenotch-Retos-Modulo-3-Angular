import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  public ciudad:Ciudad
  public ciudades:Ciudad[]
  public nuevaCiudad:Ciudad
  public show:boolean=false;
  
  constructor() { 
    this.ciudades= [
    new Ciudad("Madrid","España","MAD"),
    new Ciudad("Buenos Aires","Argentina","BUE"),
    new Ciudad("Melbourne","Australia","MEL"),
    new Ciudad("Atenas","Grecia","ATN")
    ]
  }
  
  public getAll():Ciudad[] {
    return this.ciudades
  }
  
  public getOne(code:string):Ciudad {
    for(let i in this.ciudades){
      if(this.ciudades[i].codigo===code){
        return this.ciudades[i]
      }
    }
  }
  
  public add(ciudad:Ciudad): boolean {
    this.ciudades.push(ciudad)
    return true
  }
  
  public edit(code: string, ciudad: Ciudad): boolean {
    for(let i in this.ciudades){
      if(this.ciudades[i].codigo===code){
        console.log('Codigo encontrado')
        this.ciudades[i]=ciudad
        return true
      }
    }
    return false
  }
  
  public delete(code: string): boolean  {
    for(let i in this.ciudades){
      if(this.ciudades[i].codigo===code){
        console.log("Hola desde delete")
        this.ciudades.splice(parseInt(i), 1);
      }
    }
    return true
  }
}
  