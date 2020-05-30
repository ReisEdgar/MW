import { NgModule } from '@angular/core';
import { TimesheetWidgetComponent } from '../timesheet-widget/timesheet-widget.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { WorkdayInfoComponent } from '../workday-info/workday-info.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { DaySlotComponent } from '../calendar/day-slot/day-slot.component';
import { HoursComponent } from '../workday-info/hours/hours.component';
import { ExpensesComponent } from '../workday-info/expenses/expenses.component';
import { AdditionalHoursComponent } from '../workday-info/additional-hours/additional-hours.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { WorkdayInfoModule } from '../workday-info/workday-info.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CalendarComponent,
    DaySlotComponent,
  ],
  imports: [
    MatTableModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    WorkdayInfoModule,
    MatTableModule,    
    CommonModule
  ],
  providers: [],
  exports: [CalendarComponent]
})
export class CalendarModule { }
