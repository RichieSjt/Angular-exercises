import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any, sortProperty: string): unknown {
    const sortedList = value.sort((a, b) => {
      if(a[sortProperty] > b[sortProperty]) return 1
      if(a[sortProperty] < b[sortProperty]) return -1
      return 0
    })
    
    return sortedList;
  }
}
