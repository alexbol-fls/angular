/**
 * Created by alexanderbol on 12/06/2016.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  value = 0;

  constructor(/*initValue=0*/)
  {
     // this.value = initValue;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
};
