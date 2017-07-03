import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if (searchText == null) {
      return value;
    }

    return value.filter(function (player) {
      return player.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}
