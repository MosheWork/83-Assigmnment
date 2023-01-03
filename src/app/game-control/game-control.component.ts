import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  counter = 0;
  interval: any;
  Odd = 0;
  Even = 0;

  OnStart(counter: number, Odd: number, Even: number) {
    this.interval = setInterval(() => {
      this.counter++;
      if (this.counter % 2 == 0) {
        this.Even = this.counter;
      } else {
        this.Odd = this.counter;
      }
      console.log('counter= ' + counter, 'even= ' + Even);
    }, 1000);
  }

  OnStop() {
    clearInterval(this.interval);
  }
  OnReset() {
    clearInterval(this.interval);

    this.Even = 0;
    this.counter = 0;
    this.Odd = 0;
  }
}
