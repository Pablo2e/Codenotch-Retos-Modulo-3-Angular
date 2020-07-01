import { Component, OnInit } from '@angular/core';
import { CiudadesService } from 'src/app/shared/ciudades.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

public parametro:string
public salida:Ciudad
public ciudad:Ciudad
public ciudades:Ciudad[]

  constructor(public ciudadesService: CiudadesService, private rutaActiva: ActivatedRoute) {
    this.ciudades=ciudadesService.getAll();
   }

   ngOnInit(): void {
    this.parametro = this.rutaActiva.snapshot.params.parametro1
  }

}
