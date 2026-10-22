import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sells',
  standalone: true,
})
export class SellsPipe implements PipeTransform {
  transform(value: number): string {
    return `${value / 1000} k ventes`;
  }
}
