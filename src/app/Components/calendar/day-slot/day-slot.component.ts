import { Component, OnInit, Input } from '@angular/core';
import { DaySlot } from '../models/day-slot';

@Component({
  selector: 'app-day-slot',
  templateUrl: './day-slot.component.html',
  styleUrls: ['./day-slot.component.css']
})
export class DaySlotComponent implements OnInit {

  @Input() day: DaySlot;
  constructor() { }

  ngOnInit(): void {
  }

}
