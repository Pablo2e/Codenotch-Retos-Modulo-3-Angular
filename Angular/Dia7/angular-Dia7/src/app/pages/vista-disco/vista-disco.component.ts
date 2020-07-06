import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/model/disco';
import { DiscoService } from 'src/app/shared/disco.service';



@Component({
  selector: 'app-vista-disco',
  templateUrl: './vista-disco.component.html',
  styleUrls: ['./vista-disco.component.css']
})
export class VistaDiscoComponent implements OnInit {

  public discos:object
  public disco:Disco

  constructor(public discoService:DiscoService) {
    console.log("Funcionando servicio vista-disco")
    this.disco
  }

  onSubmit(form){
    console.log(form.value)
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

  ngOnInit(): void {
  }

}
