import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  public ciudad:Ciudad
  public ciudades:Ciudad[]
  public salida:Ciudad
  public nuevaCiudad:Ciudad
  public show:boolean=false;
  public show2:boolean=false;
  
  constructor() { 
    this.ciudades= [
    new Ciudad("Madrid","España","MAD"),
    new Ciudad("Buenos Aires","Argentina","BUE"),
    new Ciudad("Melbourne","Australia","MEL"),
    new Ciudad("Atenas","Grecia","ATN")
    ]
    let nuevaCiudad = new Ciudad("Roma", "Italia", "ROM")
  }
  
  public getAll():Ciudad[] {
    //this.show=true
    return this.ciudades
  }
  
  public getOne(code:string):Ciudad {
    for(let i in this.ciudades){
      if(this.ciudades[i].codigo===code){
        //this.show2=true
        //this.ciudad=null
        return this.ciudades[i]
      }
    }
  }
  
  public add(ciudad:Ciudad): boolean {
    this.ciudades.push(ciudad)
    //this.ciudad=null
    //this.show2=false
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
  