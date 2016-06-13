import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { CounterComponent } from './counter.component';

@Component({
  moduleId: module.id,
  selector: 'angular-app',
  template: `
      <h1>{{title}}</h1>
      <counter [initValue]="10"></counter>
    `,
  styleUrls: ['angular.component.css'],
  directives: [ CounterComponent ],
  providers: [ CounterService ]
})
export class AngularAppComponent {
  title = 'angular works very well!';
}
