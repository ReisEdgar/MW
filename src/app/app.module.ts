import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TimesheetWidgetModule } from './Components/timesheet-widget/timesheet-widget.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    TimesheetWidgetModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
