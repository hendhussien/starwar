import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(people, word: string): unknown {
    if (word == undefined) {
      return people;
    }
    return people.filter(function (people) {
      return people.name.toLowerCase().includes(word.toLowerCase());
    });
  }
}
