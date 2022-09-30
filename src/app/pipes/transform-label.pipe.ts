import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'transformLabel'
  })
  export class TableColumnLabel implements PipeTransform {
    transform(val:string):string {
      return val.split("_").join(" ").toUpperCase();
    }
  }