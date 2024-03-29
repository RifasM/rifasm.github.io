import { Component } from '@angular/core';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  providers: [Globals],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Portfolio';

  constructor(public globals: Globals) {}
}
