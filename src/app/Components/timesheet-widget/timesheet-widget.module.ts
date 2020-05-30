import { NgModule } from '@angular/core';
import { TimesheetWidgetComponent } from '../timesheet-widget/timesheet-widget.component';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { WorkdayInfoModule } from '../workday-info/workday-info.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { CalendarModule } from '../calendar/calendar.module';
import {  HttpClientModule } from '@angular/common/http';
import { HttpHelperService } from '../helpers/http-helper.service';
import { TimesheetEventService } from './timesheet-event..service';

@NgModule({
  declarations: [
    TimesheetWidgetComponent,
  ],
  imports: [
    MatTableModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    WorkdayInfoModule,
    MatTableModule,
    DashboardModule,
    CalendarModule,
    HttpClientModule
  ],
  providers: [
    HttpHelperService,
    TimesheetEventService
  ],
  exports: [TimesheetWidgetComponent]
})
export class TimesheetWidgetModule { }
