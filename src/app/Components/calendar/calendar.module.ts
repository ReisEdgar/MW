import { NgModule } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { DaySlotComponent } from '../calendar/day-slot/day-slot.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { DaySummaryModule } from '../day-summary/day-summary.module';
import { SharedModule } from '../shared/shared.module';
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
    SharedModule,
    CommonModule
  ],
  providers: [],
  exports: [CalendarComponent]
})
export class CalendarModule { }
