import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioGrados'
})
export class CambioGradosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
