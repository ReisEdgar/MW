import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-day-slot',
  templateUrl: './day-slot.component.html',
  styleUrls: ['./day-slot.component.css']
})
export class DaySlotComponent implements OnInit {

  date: Date = new Date(2020,2,2);
  constructor() { }

  ngOnInit(): void {
  }

}
