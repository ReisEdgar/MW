import { Component, OnInit, Input } from '@angular/core';
import { DaySummaryEvents } from './models/day-summary-events';

@Component({
  selector: 'app-day-summary',
  templateUrl: './day-summary.component.html',
  styleUrls: ['./day-summary.component.css']
})
export class DaySummaryComponent implements OnInit {
  
  @Input() daySummaryEvents: DaySummaryEvents[];

  constructor() { }

  ngOnInit(): void {
  }

}