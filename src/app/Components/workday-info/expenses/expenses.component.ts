import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  displayedColumns: string[] = ['type', 'quantity', 'total'];
  dataSource = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

interface ExpensesItem {
  type: string;
  quantity: number;  
  total: number;  
}

const DATA: ExpensesItem[] = [
  {type: "test", quantity: 2, total: 5 },
  {type: "test", quantity: 2, total: 5 },
  {type: "test", quantity: 2, total: 5 },
];