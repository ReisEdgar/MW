import { Component, OnInit, Input } from '@angular/core';
import { Day } from './models/day';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  
  @Input() days: Day[];

  constructor() {    
   }

  ngOnInit(): void {
  }

}
