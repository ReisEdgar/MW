import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'durationPipe'})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    let hours = Math.floor(value);
    let minutes = Math.round(60*(value-hours));
    let minutesString ="";
    if(minutes === 0){
        minutesString="00"
    } else if( minutes < 10){
        minutesString = `0${minutes}`;
    }else{
        minutesString = minutes.toString();
    }
    return `${hours}:${minutesString}`;
  }
}