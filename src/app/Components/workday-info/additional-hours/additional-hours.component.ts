import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-hours',
  templateUrl: './additional-hours.component.html',
  styleUrls: ['./additional-hours.component.css']
})
export class AdditionalHoursComponent implements OnInit {

  displayedColumns: string[] = ['type', 'amount'];
  dataSource = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}


interface AdditionalHoursItem {
  type: string;
  amount: number;
}

const DATA: AdditionalHoursItem[] = [
  {type: "test", amount: 2.5},
  {type: "test", amount: 2.5},
  {type: "test", amount: 2.5},
];