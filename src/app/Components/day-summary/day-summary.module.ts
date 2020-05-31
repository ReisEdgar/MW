import { NgModule } from '@angular/core';
import { DaySummaryComponent } from './day-summary.component';
import { HoursComponent } from './hours/hours.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AdditionalHoursComponent } from './additional-hours/additional-hours.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [
    DaySummaryComponent,
    HoursComponent,
    ExpensesComponent,
    AdditionalHoursComponent,
  ],
  imports: [
    MatGridListModule,
    MatListModule,
    MatTableModule,
    SharedModule,
    CommonModule,
    ScrollingModule,
    MatToolbarModule
  ],
  providers: [],
  exports: [DaySummaryComponent]
})
export class DaySummaryModule { }
