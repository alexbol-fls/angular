/**
 * Created by alexanderbol on 12/06/2016.
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector:"toolbar",
  template: `
    <button (click)="increment()"><h3>{{incrementButtonLabel}}</h3></button>
    <button (click)="decrement()"><h3>{{decrementButtonLabel}}</h3></button>
  `,
})
export class ToolbarComponent {
  @Input() incrementButtonLabel;
  @Input() decrementButtonLabel;

  @Output("incrementButtonClicked")
  incrementEmitter = new EventEmitter();

  @Output("decrementButtonClicked")
  decrementEmitter = new EventEmitter();

  increment() {
    this.incrementEmitter.emit({});
  }

  decrement() {
    this.decrementEmitter.emit({});
  }
}
