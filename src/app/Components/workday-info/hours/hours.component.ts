import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {

  displayedColumns: string[] = ['type', 'duration'];
  dataSource = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}


interface HoursItem {
  type: string;
  duration: string;  
}

const DATA: HoursItem[] = [
  {type: "test", duration: "7:30" },
  {type: "test", duration: "7:30" },
  {type: "test", duration: "7:30" },
];