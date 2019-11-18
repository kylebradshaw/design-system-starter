import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>My Storybook App</h1>
    <button>What is UP?!</button>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'design-system-starter';
}
