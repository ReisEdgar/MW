import { NgModule } from '@angular/core';
import { DaySummaryComponent } from './day-summary.component';
import { HoursComponent } from './hours/hours.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AdditionalHoursComponent } from './additional-hours/additional-hours.component';
import {MatListModule, MatList, MatListItem} from '@angular/material/list';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

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
    MatTableModule
  ],
  providers: [],
  exports: [DaySummaryComponent]
})
export class DaySummaryModule { }
