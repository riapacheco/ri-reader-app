import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caps'
})
export class CapsPipe implements PipeTransform {

  transform(value: any): any {
    const capsData = value.toUpperCase();
    return capsData;
  }

}
