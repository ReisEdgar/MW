import { NgModule } from '@angular/core';
import { TimesheetWidgetComponent } from '../timesheet-widget/timesheet-widget.component';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { DaySummaryModule } from '../day-summary/day-summary.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { CalendarModule } from '../calendar/calendar.module';
import {  HttpClientModule } from '@angular/common/http';
import { HttpHelperService } from '../helpers/http-helper.service';
import { TimesheetEventService } from './service/timesheet-event.service';

@NgModule({
  declarations: [
    TimesheetWidgetComponent,
  ],
  imports: [
    MatTableModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    DaySummaryModule,
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
