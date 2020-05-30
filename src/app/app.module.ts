import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimesheetWidgetComponent } from './Components/timesheet-widget/timesheet-widget.component';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { WorkdayInfoComponent } from './Components/workday-info/workday-info.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { DaySlotComponent } from './Components/calendar/day-slot/day-slot.component';
import { HoursComponent } from './Components/workday-info/hours/hours.component';
import { ExpensesComponent } from './Components/workday-info/expenses/expenses.component';
import { AdditionalHoursComponent } from './Components/workday-info/additional-hours/additional-hours.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    WorkdayInfoComponent,
    TimesheetWidgetComponent,
    CalendarComponent,
    DashboardComponent,
    DaySlotComponent,
    HoursComponent,
    ExpensesComponent,
    AdditionalHoursComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
