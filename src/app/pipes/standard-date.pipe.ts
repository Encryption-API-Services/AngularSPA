import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'standardDate'
})
export class StandardDatePipe implements PipeTransform {

  transform(value: string): string {
    let date = new Date(value).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute: "numeric"});
    return date;
  }

}
