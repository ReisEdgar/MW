import { Injectable } from '@angular/core';
import { GroupedTimesheetEvent } from './models/grouped-timesheet-event';
import { Observable } from 'rxjs';
import { HttpHelperService } from '../helpers/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class TimesheetEventService {
  private serviceUrl = "api/service"
  constructor(private httpHelper: HttpHelperService) { }

  getTimesheetEvents(numberOfDays: number, initialDate: Date):Observable<GroupedTimesheetEvent[]>{
    return this.httpHelper.get(this.serviceUrl, `/${numberOfDays}/${initialDate.toString()}`)
  }

}
