import { NgModule } from '@angular/core';
import { WorkdayInfoComponent } from './workday-info.component';
import { HoursComponent } from './hours/hours.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AdditionalHoursComponent } from './additional-hours/additional-hours.component';
import {MatListModule, MatList, MatListItem} from '@angular/material/list';
import { MatGridList } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    WorkdayInfoComponent,
    HoursComponent,
    ExpensesComponent,
    AdditionalHoursComponent,
    MatList,
    MatListItem,
    MatGridList
  ],
  imports: [
    
    ],
  providers: [],
  exports: [WorkdayInfoComponent]
})
export class WorkdayInfoModule { }
