import { Component, OnInit, Input } from '@angular/core';
import { ExpensesEvent } from '../models/expensesEvent';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  displayedColumns: string[] = ['type', 'quantity', 'total'];
  @Input() expenses: ExpensesEvent[];

  constructor() { }

  ngOnInit(): void {
  }

