import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Disco } from '../model/disco';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  private url = "http://localhost:4000/discos"
  public disco:any
 
  constructor(private http:HttpClient) { }

 public obtenerDiscos(){
   return this.http.get(this.url)
 }  //Devuelve la llamada al endpoint GET “/discos”
 public obtenerDisco(id:number){
  return this.http.get(this.url + "/" + id)
 }  //Devuelve la llamada al endpoint GET “/discos/:id” 
 public anyadirDisco(nDisco:Disco){
  return this.http.post(this.url, nDisco)
 }  //Devuelve la llamada al endpoint POST “/discos” 
 public actualizarDisco(nDisco:Disco) {
   return this.http.put(this.url, nDisco )
  } //Devuelve la llamada al endpoint PUT “/discos”.
 public borrarDisco(id:number){
  let options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    body: {
      disco_id: id
    },
  };
  return this.http.delete(this.url, options)
} //Devuelve la llamada al endpoint DELETE ”/discos”. 
}