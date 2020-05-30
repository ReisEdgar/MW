import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../models/day';

@Component({
  selector: 'app-day-slot',
  templateUrl: './day-slot.component.html',
  styleUrls: ['./day-slot.component.css']
})
export class DaySlotComponent implements OnInit {

  @Input() day: Day;
  constructor() { }

  ngOnInit(): void {
  }

}
