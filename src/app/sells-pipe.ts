import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sells',
})
export class SellsPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
