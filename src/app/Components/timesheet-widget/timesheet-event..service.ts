import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHelperService } from '../helpers/http-helper.service';
import { MockData } from '../helpers/mock-timesheet-events';
import { GroupedTimesheetEvent } from './api-models/grouped-timesheet-event';

@Injectable({
  providedIn: 'root'
})
export class TimesheetEventService {
  private serviceUrl = "api/service"
  constructor(private httpHelper: HttpHelperService) { }

  getTimesheetEvents(numberOfDays: number, initialDate: Date):Observable<GroupedTimesheetEvent[]>{
    //return this.httpHelper.get(this.serviceUrl, `/${numberOfDays}/${initialDate.toString()}`)
   return of(MockData)

  }

}
