import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogEllipsis'
})
export class BlogEllipsisPipe implements PipeTransform {

  transform(value: string, length: string): string {
    return value.substring(0, parseInt(length)) + "...";
  }
}