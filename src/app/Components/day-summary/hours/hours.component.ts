import { Component, OnInit, Input } from '@angular/core';
import { HoursEvent } from '../models/hoursEvent';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {

  displayedColumns: string[] = ['type', 'duration'];
  @Input() hoursEvents:HoursEvent[];

  constructor() { }

  ngOnInit(): void {
  }

}
