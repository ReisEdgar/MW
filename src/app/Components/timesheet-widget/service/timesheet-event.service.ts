import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHelperService } from '../../helpers/http-helper.service';
import { Day } from '../api-models/day';

@Injectable({
  providedIn: 'root'
})
export class TimesheetEventService {
  private serviceUrl = "api/service"
  constructor(private httpHelper: HttpHelperService) { }

  getTimesheetEvents(numberOfDays: number, initialDate: Date): Observable<Day[]> {
    return this.httpHelper.get(this.serviceUrl, `/${numberOfDays}/${initialDate.toString()}`)
   // return of(MockData)

  }

  
}
