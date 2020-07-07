import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../shared/disco.service';
import { Disco } from '../model/disco';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})
export class VistaPage implements OnInit {

  public discos:object
  public disco:Disco

  constructor(public discoService:DiscoService) {
    console.log("Funcionando servicio vista-disco")
  }

  discosF(valor){
    if(valor===null){
    this.discoService.obtenerDiscos().subscribe((data)=>{
      console.log(data)
      this.discos=data
    })
    }else{
      this.discoService.obtenerDisco(valor).subscribe((data)=>{
        console.log(data)
        this.discos=data
        console.log(this.discos)
        
      })
    }
  }


  ngOnInit() {
  }

}
