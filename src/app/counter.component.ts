/**
 * Created by alexanderbol on 12/06/2016.
 */
import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from "./counter.service";
import { ToolbarComponent } from "./toolbar.component";

@Component({
  selector:"counter",
  template:`
    <div>
      <h1>{{counterService.value}}</h1>
      <toolbar
         incrementButtonLabel="Increment"
         decrementButtonLabel="Decrement"
         (incrementButtonClicked)="counterService.increment()"
         (decrementButtonClicked)="counterService.decrement()"
       >
       </toolbar>
    </div>
  `,
  directives:[ToolbarComponent]
})
export class CounterComponent implements OnInit {
  @Input() initValue;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.value = this.initValue;
  }
}
