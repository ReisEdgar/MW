import { Component } from '@angular/core';
import { Day } from './Components/calendar/models/day';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  days:Day[]=[];
  title = 'MW';
}
