import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioGrados'
})
export class CambioGradosPipe implements PipeTransform {

  transform(valor: number, unidad: string) {
    if(valor && !isNaN(valor)) {
        if (unidad === 'C') {
            //var temperatura = (valor - 32) /1.8 ;
            var temperatura = (valor);
            return (temperatura.toFixed(1).toString() +"ºC");
        } else if (unidad === 'F'){
            var temperatura = (valor * 1.8 ) + 32
            return (temperatura.toFixed(1).toString() +"ºF");
        }
    }
    return;
  }
}
