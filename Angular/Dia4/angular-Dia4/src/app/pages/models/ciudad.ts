import { Clima } from './clima';

export class Ciudad{
  public nombre:string
  public pais:string
  public codigo:string
  public clima:Clima

      constructor(nombre:string, pais:string, codigo:string, clima:Clima){
      this.nombre=nombre;
      this.pais=pais;
      this.codigo=codigo;
      this.clima=clima;
     
  }

  
}
