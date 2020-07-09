import { Component, OnInit } from '@angular/core';
import { Disco } from '../model/disco';
import { DiscoService } from '../shared/disco.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  public disco:Disco
  public toast:any
  
  constructor(public discoService:DiscoService, private toastCtrl:ToastController) {
    console.log("Funcionando servicio formulario-disco")
    this.disco
  }

  
  anyadir(id:number, titulo:string, interprete:string, anyoPublicacion:number ){
    if(titulo !="" && interprete !="" && anyoPublicacion !=null ){
      this.discoService.anyadirDisco(new Disco(null,titulo,interprete,anyoPublicacion)).subscribe((data)=>{
        titulo = "";
        interprete = "";
        anyoPublicacion = null;
        this.presentToast("Disco insertado Correctamente");
        console.log(data)
      })
    }else{
      this.presentToast("Falta algún campo para poder realizar la inserción")
    }
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

  presentToast(mensaje:string){
    this.toast = this.toastCtrl.create({
      message:mensaje,
      duration:2000,
      position:"top"
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }

  ngOnInit() {
  }

}
