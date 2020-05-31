import { Component, OnInit, Input } from '@angular/core';
import { AdditionalHoursEvent } from '../models/additionalHoursEvent';

@Component({
  selector: 'app-additional-hours',
  templateUrl: './additional-hours.component.html',
  styleUrls: ['./additional-hours.component.css']
})
export class AdditionalHoursComponent implements OnInit {

  displayedColumns: string[] = ['type', 'amount'];
  @Input() additionalHoursEvents: AdditionalHoursEvent[];

  constructor() { }

  ngOnInit(): void {
  }

}
