import { NgModule } from '@angular/core';
import { TimesheetWidgetComponent } from '../timesheet-widget/timesheet-widget.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { DaySummaryComponent } from '../day-summary/day-summary.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { DaySlotComponent } from '../calendar/day-slot/day-slot.component';
import { HoursComponent } from '../day-summary/hours/hours.component';
import { ExpensesComponent } from '../day-summary/expenses/expenses.component';
import { AdditionalHoursComponent } from '../day-summary/additional-hours/additional-hours.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { DaySummaryModule } from '../day-summary/day-summary.module';
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
    DaySummaryModule,
    MatTableModule,    
    CommonModule
  ],
  providers: [],
  exports: [CalendarComponent]
})
export class CalendarModule { }
